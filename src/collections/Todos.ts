import type { CollectionConfig } from "payload";

const Todos: CollectionConfig = {
    slug: 'todos',
    admin: {
      useAsTitle: 'title',
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        type: 'textarea',
      },
      {
        name: 'status',
        type: 'select',
        options: [
          { label: 'Do zrobienia', value: 'todo' },
          { label: 'Zrobione', value: 'done' },
        ],
        defaultValue: 'todo',
      },
      {
        name: 'dueDate',
        type: 'date',
      },
    ],
  };
  
  export default Todos;