import { Form } from "radix-ui"

export default function GameInfo() {
  return (
    <div className="game-info border-1 rounded">
      <Form.Root>
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
