export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white dark:from-[#010A1A] dark:to-black">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    );
  }