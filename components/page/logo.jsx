import Link from "next/link";

export default function BrandLogo() {
    return (
        <Link href="/" className="select-none flex items-center gap-2">
            <h1 className="text-3xl font-extrabold tracking-wide">
                Tune<span className="opacity-50">Flow</span>
            </h1>
        </Link>
    );
}
