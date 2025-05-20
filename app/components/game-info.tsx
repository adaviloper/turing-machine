import React from 'react';
import { Form } from "radix-ui"

export default function GameInfo() {
  return (
    <div className="game-info rounded-xl p-4 bg-blue-100 mb-8">
      <Form.Root className="mb-4">
        <Form.Field name="username">
          <Form.Label>Name</Form.Label>

          <Form.Control asChild>
            <input type="text" className="rounded border" />
          </Form.Control>
        </Form.Field>
      </Form.Root>

      <Form.Root>
        <Form.Field name="game_id">
          <Form.Label>Game ID</Form.Label>

          <Form.Control asChild>
            <input type="text" className="rounded border" required />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  );
}
