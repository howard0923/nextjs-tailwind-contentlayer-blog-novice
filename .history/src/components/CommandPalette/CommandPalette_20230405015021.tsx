import {
  MagnifyingGlassIcon,
  // ...
} from '@heroicons/react/24/outline';
// ...

export default function CommandPalette({ children }: Props) {
  // ...

  const actions = [
    // Page section
    // ...

    // 加入這個 section
    // Search section
    // - Search posts
    {
      id: 'search-posts',
      name: '文章',
      keywords:
        'search find posts writing words blog articles thoughts 搜尋 尋找 文章 寫作 部落格',
      icon: <MagnifyingGlassIcon className="h-6 w-6" />,
      section: '搜尋',
    },

    // Operation section
    // - Theme toggle
    // ...
  ];

  return (
    <KBarProvider actions={actions}>
      <CommandBar />
      {children}
    </KBarProvider>
  );
}

// ...
