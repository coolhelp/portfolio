import "./globals.css";

export const metadata = {
  title: "Andrew Yang - Full-Stack Software Engineer",
  description: "Portfolio of Andrew Yang, Full-Stack Software Engineer specializing in React, Next.js, Node.js, Go, and AWS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

