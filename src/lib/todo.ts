export type ParsedTodo = {
  label: string;
  projectLabel?: string;
  listLabel?: string;
  tags?: string[];
};

export function parseTodo(input: string): ParsedTodo {
  const output: ParsedTodo = {
    label: '',
  };

  const words = input.split(' ');

  const label: string[] = [];

  words.forEach((word) => {
    if (word.startsWith('!')) {
      if (output.listLabel) {
        throw new Error('Todo may only have one list');
      }

      output.listLabel = word.slice(1);
    }

    if (word.startsWith('@')) {
      if (output.projectLabel) {
        throw new Error('Todo may only have one project');
      }

      output.projectLabel = word.slice(1);
    }

    if (word.startsWith('+')) {
      if (!output.tags) {
        output.tags = [];
      }

      output.tags = [...output.tags, word.slice(1)];
    }

    label.push(word);
  });

  output.label = label.join(' ');

  return output;
}
