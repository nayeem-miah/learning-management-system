export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body>
                <div className="flex justify-center items-center min-h-screen ">
                    {children}
                </div>
            </body>
        </html>
    );
}   