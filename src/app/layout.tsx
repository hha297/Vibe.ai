import type { Metadata } from 'next';

import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { TRPCReactProvider } from '@/trpc/client';

const spaceGrotesk = Space_Grotesk({
        subsets: ['latin'],
        weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
        title: 'Vibe AI',
        description: 'Vibe AI',
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <TRPCReactProvider>
                        <html lang="en">
                                <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
                        </html>
                </TRPCReactProvider>
        );
}
