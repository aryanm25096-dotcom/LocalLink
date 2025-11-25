'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BentoCard } from '@/components/ui/BentoCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useStore } from '@/lib/store';
import { toast } from 'sonner';
import { Loader2, MapPin, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
    'Sanitation',
    'Roads',
    'Water Supply',
    'Agriculture',
    'Electricity',
    'Other'
] as const;

export default function ManualReportPage() {
    const router = useRouter();
    const { location, error: geoError, loading: geoLoading, getLocation } = useGeolocation();
    const addReport = useStore((state) => state.addReport);

    const [category, setCategory] = useState<string>('');
    const [severity, setSeverity] = useState([5]);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getDepartment = (cat: string) => {
        switch (cat) {
            case 'Sanitation': return 'Sanitation Bureau';
            case 'Roads': return 'Public Works Dept';
            case 'Water Supply': return 'Water Board';
            case 'Agriculture': return 'Agriculture Extension';
            case 'Electricity': return 'Power Corp';
            default: return 'General Inquiry';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!category || !description) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate a small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800));

        const department = getDepartment(category);

        addReport({
            image: '', // No image for manual reports
            category: category as any, // Type assertion as our store types are specific
            severity: severity[0],
            description,
            location: location,
            department,
        });

        toast.success('Report Saved (Offline Ready)');
        router.push('/citizen/history');
    };

    return (
        <div className="min-h-screen p-6 pb-24 max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/citizen">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Manual Report</h1>
            </div>

            <BentoCard className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-amber-500">Report an Issue</CardTitle>
                    <CardDescription className="text-slate-400">
                        Fill out the details below to submit a report manually.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Category Selection */}
                        <div className="space-y-2">
                            <Label htmlFor="category" className="text-amber-500 font-semibold">Category</Label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger id="category" className="bg-neutral-900 border-neutral-800 text-slate-200 focus:border-amber-500/50 focus:ring-amber-500/20">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-900 border-neutral-800 text-slate-200">
                                    {CATEGORIES.map((cat) => (
                                        <SelectItem key={cat} value={cat} className="focus:bg-amber-500/20 focus:text-amber-500">{cat}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Severity Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label className="text-amber-500 font-semibold">Severity Level: {severity[0]}</Label>
                                <span className="text-xs text-slate-500">
                                    {severity[0] <= 3 ? 'Low' : severity[0] <= 7 ? 'Medium' : 'Critical'}
                                </span>
                            </div>
                            <Slider
                                value={severity}
                                onValueChange={setSeverity}
                                max={10}
                                min={1}
                                step={1}
                                className="py-2"
                            />
                            <div className="flex justify-between text-xs text-slate-500 px-1">
                                <span>Low</span>
                                <span>Critical</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description" className="text-amber-500 font-semibold">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Describe the issue in detail..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="min-h-[120px] resize-none bg-neutral-900 border-neutral-800 text-slate-200 focus:border-amber-500/50 focus:ring-amber-500/20 placeholder:text-neutral-600"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <Label className="text-amber-500 font-semibold">Location</Label>
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-neutral-800 bg-neutral-900">
                                <div className="p-2 bg-amber-500/10 rounded-full">
                                    <MapPin className="w-5 h-5 text-amber-500" />
                                </div>
                                <div className="flex-1">
                                    {location ? (
                                        <div className="text-sm">
                                            <p className="font-medium text-emerald-400">Location Locked</p>
                                            <p className="text-slate-500 text-xs">Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}</p>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-slate-500">Location not set</p>
                                    )}
                                </div>
                                <Button
                                    type="button"
                                    size="sm"
                                    onClick={getLocation}
                                    disabled={geoLoading || !!location}
                                    className={location
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                                        : "bg-cyan-500 text-black hover:bg-cyan-400 font-bold shadow-lg shadow-cyan-500/20"}
                                >
                                    {geoLoading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : location ? (
                                        "Updated"
                                    ) : (
                                        "Get GPS"
                                    )}
                                </Button>
                            </div>
                            {geoError && <p className="text-xs text-red-400 mt-1">{geoError}</p>}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full h-12 text-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 mr-2" />
                                    Submit Report
                                </>
                            )}
                        </Button>

                    </form>
                </CardContent>
            </BentoCard>
        </div>
    );
}
