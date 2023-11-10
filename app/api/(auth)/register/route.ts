import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createUser, getUserByUsername } from '../../../../database/users';
import { User } from '../../../../migrations/00000-createTableUsers';

const registerSchema = z.object({
  email: z.string().min(3),
  username: z.string().min(3),
  password: z.string().min(3),
});

export type RegisterResponseBodyPost =
  | {
      user: User;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();

  // console.log('body: ', body);

  const result = registerSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  console.log('result: ', result);

  const user = await getUserByUsername(result.data.username);

  if (user) {
    return NextResponse.json(
      { errors: [{ message: 'username is already taken' }] },
      { status: 403 },
    );
  }

  console.log('Result: ', user);

  const passwordHash = await bcrypt.hash(result.data.password, 12);

  console.log('Result: ', passwordHash, result.data.password);

  const newUser = await createUser(result.data.username, passwordHash);

  console.log('Result: ', newUser);

  return NextResponse.json({
    user: newUser,
  });
}
