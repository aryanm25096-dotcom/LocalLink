"use client";

import { ClassificationResult } from "@/components/citizen/ClassificationResult";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResultPage() {
    const router = useRouter();
    const reports = useStore((state) => state.reports);
    // Get the latest report
    const latestReport = reports[reports.length - 1];

    const handleNavigate = (screen: string) => {
        if (screen === 'camera') {
            router.push('/citizen/report');
        } else if (screen === 'credits') {
            router.push('/citizen');
        }
    };

    if (!latestReport) {
        // Redirect if no report found (e.g. direct access)
        useEffect(() => {
            router.push('/citizen');
        }, [router]);
        return null;
    }

    return (
        <ClassificationResult
            onNavigate={handleNavigate}
            capturedImage={latestReport.image || ""}
            report={latestReport}
        />
    );
}
