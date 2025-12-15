// 强制动态渲染，避免静态生成时 LanguageProvider 上下文不可用
export const dynamic = 'force-dynamic';

export default function HomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
