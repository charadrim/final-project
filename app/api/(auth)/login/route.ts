import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createSession } from '../../../../database/sessions';
import { getUserWithPasswordHashByUsername } from '../../../../database/users';
import { secureCookieOptions } from '../../../../util/cookies';

// import { User } from '../../../../migrations/00000-createTablesusers';

const loginSchema = z.object({
  // email: z.string().min(3),
  username: z.string().min(3),
  password: z.string().min(3),
});

export type LoginResponseBodyPost =
  | {
      user: { username: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<LoginResponseBodyPost>> {
  // Task: Implement the user registration workflow

  // 1. Get the user data from the request
  const body = await request.json();

  // console.log('body: ', body);

  // 2. Validate the user data
  const result = loginSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  // console.log('result: ', result);

  // 3. Verify user credentials
  const userWithPasswordHash = await getUserWithPasswordHashByUsername(
    result.data.username,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json(
      { errors: [{ message: 'username or password not valid' }] },
      { status: 403 },
    );
  }

  // console.log('check: ', userWithPasswordHash);

  // // 4. Validate the user password by comparing with hashed password

  const isPasswordValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );

  // console.log(
  //   'Check valid:  ',
  //   isPasswordValid,
  //   result.data.password,
  //   userWithPasswordHash.passwordHash,
  // );

  if (!isPasswordValid) {
    return NextResponse.json(
      { errors: [{ message: 'username or password not valid' }] },
      { status: 401 },
    );
  }
  // At this stage we already confirm that the user is who they say they are

  // 4. Create a token
  const token = crypto.randomBytes(100).toString('base64');

  // 5. Create the session record

  const session = await createSession(userWithPasswordHash.id, token);

  // console.log('session: ', session);

  if (!session) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new session' }] },
      {
        status: 401,
      },
    );
  }

  // 6. Send the new cookie in the headers

  console.log('session: ', session);

  // cookies().set({
  //   name: 'sessionToken',
  //   value: session.token,
  //   httpOnly: true,
  //   path: '/',
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 48, // Expires in 24 hours,
  //   sameSite: 'lax', // this prevents CSRF attacks
  // });

  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 6. Return the new user information without the password hash

  return NextResponse.json({
    user: {
      username: userWithPasswordHash.username,
    },
  });
}
