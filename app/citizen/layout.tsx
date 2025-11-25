import BottomNav from '@/components/ui/BottomNav';

export default function CitizenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen bg-slate-950">
            <div className="pb-24">
                {children}
            </div>
            <BottomNav />
        </div>
    );
}
