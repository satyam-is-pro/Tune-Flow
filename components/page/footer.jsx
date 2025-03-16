import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-5 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32">
            <p className="text-sm text-muted-foreground">
                Crafted with passion. Made by <a className="underline text-primary hover:text-primary" href="https://github.com/satyam-is-pro">satyam-is-pro</a>.
            </p>
        </footer>
    );
}
