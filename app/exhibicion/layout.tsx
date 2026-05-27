export default function ExhibicionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-ink">{children}</div>;
}
