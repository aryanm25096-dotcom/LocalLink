import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { 
  SlidersHorizontal, 
  MapPin, 
  Grid3X3,
  Sparkles,
  X,
  Calendar
} from "lucide-react";
import { heatmapPoints } from "../utils/mockData";

const categories = [
  "Potholes",
  "Garbage",
  "Water Leak",
  "Streetlights",
  "Drainage",
  "Trees",
];

const priorityLevels = ["Low", "Medium", "High", "Urgent"];

export function LiveHeatmap() {
  const [showFilters, setShowFilters] = useState(true);
  const [showClusters, setShowClusters] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

  return (
    <div className="h-full flex">
      {/* Left Toolbar */}
      {showFilters && (
        <div className="w-80 bg-white border-r border-[#ECEDEF] p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#0A66C2]" />
              <h2 className="text-lg text-[#0F172A]">Filters</h2>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowFilters(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* View Mode Toggle */}
          <div className="mb-6">
            <label className="text-sm text-[#0F172A]/60 mb-3 block">View Mode</label>
            <div className="flex items-center gap-3">
              <Button
                variant={showClusters ? "default" : "outline"}
                size="sm"
                onClick={() => setShowClusters(true)}
                className={showClusters ? "bg-[#0A66C2]" : ""}
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                Clusters
              </Button>
              <Button
                variant={!showClusters ? "default" : "outline"}
                size="sm"
                onClick={() => setShowClusters(false)}
                className={!showClusters ? "bg-[#0A66C2]" : ""}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Pins
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <label className="text-sm text-[#0F172A]/60 mb-3 block">Categories</label>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <Checkbox id={category} defaultChecked />
                  <label 
                    htmlFor={category}
                    className="text-sm text-[#0F172A] cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Filter */}
          <div className="mb-6">
            <label className="text-sm text-[#0F172A]/60 mb-3 block">Priority</label>
            <div className="space-y-3">
              {priorityLevels.map((priority) => (
                <div key={priority} className="flex items-center gap-2">
                  <Checkbox id={priority} defaultChecked />
                  <label 
                    htmlFor={priority}
                    className="text-sm text-[#0F172A] cursor-pointer"
                  >
                    {priority}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="mb-6">
            <label className="text-sm text-[#0F172A]/60 mb-3 block">Date Range</label>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Last 7 days
            </Button>
          </div>

          {/* AI Predictions Toggle */}
          <div className="p-4 bg-[#E8F0FE] rounded-lg border border-[#0A66C2]/20">
            <div className="flex items-start gap-3">
              <Checkbox id="ai-predictions" />
              <div className="flex-1">
                <label 
                  htmlFor="ai-predictions"
                  className="text-sm text-[#0F172A] cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#0A66C2]" />
                  AI Predictions
                </label>
                <p className="text-xs text-[#0F172A]/60 mt-1">
                  Show forecasted hotspots
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Area */}
      <div className="flex-1 relative">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F0FE] to-[#F4F5F7]">
          {/* Mock city grid */}
          <svg className="w-full h-full opacity-20">
            <pattern id="grid-full" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A66C2" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-full)" />
          </svg>
        </div>

        {/* Heatmap Points */}
        {heatmapPoints.map((point, index) => {
          const severityColors: Record<string, string> = {
            low: "#0F9D58",
            medium: "#FFC247",
            high: "#D93025",
            urgent: "#D93025",
          };
          
          const positions = [
            { top: "20%", left: "30%" },
            { top: "35%", left: "60%" },
            { top: "55%", left: "25%" },
            { top: "45%", left: "70%" },
            { top: "65%", left: "45%" },
            { top: "25%", left: "80%" },
          ];

          return (
            <div
              key={point.id}
              className="absolute cursor-pointer"
              style={positions[index]}
              onClick={() => setSelectedPoint(point)}
            >
              {showClusters && (
                <div 
                  className="w-24 h-24 rounded-full blur-2xl"
                  style={{ backgroundColor: `${severityColors[point.severity]}30` }}
                />
              )}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"
                style={{ backgroundColor: severityColors[point.severity] }}
              >
                {showClusters && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-xs whitespace-nowrap shadow-md">
                    {point.count}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Legend */}
        <Card className="absolute bottom-6 left-6 p-4 shadow-lg border-[#ECEDEF]">
          <div className="text-xs text-[#0F172A]/60 mb-3">Issue Density</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0F9D58] rounded-full" />
              <span className="text-xs text-[#0F172A]">Low (1-5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FFC247] rounded-full" />
              <span className="text-xs text-[#0F172A]">Medium (6-10)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#D93025] rounded-full" />
              <span className="text-xs text-[#0F172A]">High (11+)</span>
            </div>
          </div>
        </Card>

        {/* Toggle Filters Button (when hidden) */}
        {!showFilters && (
          <Button
            className="absolute top-6 left-6 bg-[#0A66C2]"
            onClick={() => setShowFilters(true)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Show Filters
          </Button>
        )}
      </div>

      {/* Right Panel - Issue Detail */}
      {selectedPoint && (
        <div className="w-96 bg-white border-l border-[#ECEDEF] p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg text-[#0F172A]">Issue Details</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSelectedPoint(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
            alt="Issue"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          <div className="space-y-4">
            <div>
              <label className="text-xs text-[#0F172A]/60">Category</label>
              <p className="text-sm text-[#0F172A]">{selectedPoint.category}</p>
            </div>

            <div>
              <label className="text-xs text-[#0F172A]/60">Severity</label>
              <div className="mt-1">
                <Badge className="bg-[#D93025]/10 text-[#D93025] border-0 capitalize">
                  {selectedPoint.severity}
                </Badge>
              </div>
            </div>

            <div>
              <label className="text-xs text-[#0F172A]/60">Issue Count in Area</label>
              <p className="text-sm text-[#0F172A]">{selectedPoint.count} reports</p>
            </div>

            <div>
              <label className="text-xs text-[#0F172A]/60">Location</label>
              <p className="text-sm text-[#0F172A]">
                {selectedPoint.lat.toFixed(4)}, {selectedPoint.lng.toFixed(4)}
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <Button className="w-full bg-[#0A66C2]">
                Assign Officer
              </Button>
              <Button variant="outline" className="w-full">
                View All Reports
              </Button>
            </div>

            <div className="p-4 bg-[#F4F5F7] rounded-lg">
              <label className="text-xs text-[#0F172A]/60 block mb-2">Notes</label>
              <textarea 
                className="w-full p-2 text-sm border border-[#ECEDEF] rounded-lg resize-none bg-white"
                rows={3}
                placeholder="Add notes..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
