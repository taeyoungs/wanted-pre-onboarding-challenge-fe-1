const todoKeys = {
  base: [{ scope: 'todo' }] as const,
  all: () => [{ ...todoKeys.base[0] }] as const,
  detail: (id: string) => [{ ...todoKeys.base[0], entity: 'detail', id }] as const,
};

export { todoKeys };
