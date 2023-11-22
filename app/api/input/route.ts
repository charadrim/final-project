import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createInput } from '../../../database/input';
import { getValidSessionByToken } from '../../../database/sessions';

const inputSchema = z.object({
  userId: z.number(),
  description: z.string().min(3),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
});

export type CreateInputResponseBodyPost =
  | {
      input: { description: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CreateInputResponseBodyPost>> {
  // 1. Get the note data from the request
  const body = await request.json();

  // 2. Validate the data
  const result = inputSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 1. get the token from the cookie
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the token has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  if (!session) {
    return NextResponse.json(
      {
        errors: [{ message: 'Authentication token is invalid' }],
      },
      { status: 401 },
    );
  }

  // 3. Create the note
  const newInput = await createInput(
    result.data.userId,
    result.data.description,
    result.data.ingredients,
    result.data.instructions,
  );

  // 4. If the note creation fails, return an error

  if (!newInput) {
    return NextResponse.json(
      {
        errors: [{ message: 'Recipe creation failed' }],
      },
      { status: 500 },
    );
  }

  // 6. Return the text content of the note
  return NextResponse.json({
    input: { description: newInput.description },
  });
}
