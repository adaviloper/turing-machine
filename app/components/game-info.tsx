import React from 'react';
import { Form } from "radix-ui"

export default function GameInfo() {
  return (
    <div className="game-info rounded-xl p-4 bg-green-100 mb-8">
      <Form.Root className="mb-4">
        <Form.Field name="username">
          <Form.Label className="text-green-700">Name</Form.Label>

          <Form.Control asChild>
            <input type="text" className="rounded border border-green-700" />
          </Form.Control>
        </Form.Field>
      </Form.Root>

      <Form.Root>
        <Form.Field name="game_id">
          <Form.Label className="text-green-700">Game ID</Form.Label>

          <Form.Control asChild>
            <input type="text" className="rounded border border-green-700" required />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  );
}
