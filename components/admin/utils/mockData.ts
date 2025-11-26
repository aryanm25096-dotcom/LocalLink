export const recentReports = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop",
    category: "Potholes",
    location: "Main St & 5th Ave",
    priority: "High",
    timestamp: "2 hours ago",
    status: "In Progress",
    assignedTo: "John Miller"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=100&h=100&fit=crop",
    category: "Garbage",
    location: "Park Avenue",
    priority: "Medium",
    timestamp: "4 hours ago",
    status: "New",
    assignedTo: "Unassigned"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100&h=100&fit=crop",
    category: "Streetlights",
    location: "Elm St",
    priority: "Urgent",
    timestamp: "5 hours ago",
    status: "Assigned",
    assignedTo: "Sarah Chen"
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=100&h=100&fit=crop",
    category: "Water Leak",
    location: "Oak Boulevard",
    priority: "Urgent",
    timestamp: "6 hours ago",
    status: "In Progress",
    assignedTo: "Mike Johnson"
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=100&h=100&fit=crop",
    category: "Trees",
    location: "Cedar Park",
    priority: "Low",
    timestamp: "8 hours ago",
    status: "Resolved",
    assignedTo: "Emma Davis"
  },
];

export const departments = [
  {
    id: 1,
    name: "Sanitation",
    issueCount: 47,
    avgLoad: 82,
    status: "high"
  },
  {
    id: 2,
    name: "Roads",
    issueCount: 34,
    avgLoad: 65,
    status: "medium"
  },
  {
    id: 3,
    name: "Water Works",
    issueCount: 23,
    avgLoad: 45,
    status: "low"
  },
  {
    id: 4,
    name: "Electricity",
    issueCount: 19,
    avgLoad: 38,
    status: "low"
  },
  {
    id: 5,
    name: "Public Safety",
    issueCount: 12,
    avgLoad: 28,
    status: "low"
  },
  {
    id: 6,
    name: "Parks & Gardens",
    issueCount: 15,
    avgLoad: 32,
    status: "low"
  },
];

export const tickets = [
  {
    id: 1001,
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop",
    category: "Potholes",
    description: "Large pothole causing traffic issues",
    aiTag: "Road Damage - High Confidence",
    department: "Roads",
    priority: "High",
    status: "In Progress",
    assignedOfficer: "John Miller",
    location: "Main St & 5th Ave",
    confidence: 94,
    timeline: [
      { status: "Received", date: "Nov 26, 10:30 AM" },
      { status: "Verified", date: "Nov 26, 10:45 AM" },
      { status: "Assigned", date: "Nov 26, 11:00 AM" },
    ]
  },
  {
    id: 1002,
    thumbnail: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=100&h=100&fit=crop",
    category: "Garbage",
    description: "Overflowing trash bins",
    aiTag: "Waste Management - High Confidence",
    department: "Sanitation",
    priority: "Medium",
    status: "New",
    assignedOfficer: "Unassigned",
    location: "Park Avenue",
    confidence: 89,
    timeline: [
      { status: "Received", date: "Nov 26, 08:30 AM" },
    ]
  },
  {
    id: 1003,
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100&h=100&fit=crop",
    category: "Streetlights",
    description: "Multiple streetlights not working",
    aiTag: "Electrical Issue - Medium Confidence",
    department: "Electricity",
    priority: "Urgent",
    status: "Assigned",
    assignedOfficer: "Sarah Chen",
    location: "Elm St",
    confidence: 76,
    timeline: [
      { status: "Received", date: "Nov 26, 07:15 AM" },
      { status: "Verified", date: "Nov 26, 07:30 AM" },
      { status: "Assigned", date: "Nov 26, 07:45 AM" },
    ]
  },
];

export const users = [
  {
    id: 1,
    name: "John Miller",
    role: "Officer",
    department: "Roads",
    phone: "+1 555-0101",
    email: "j.miller@locallink.gov",
    status: "Active"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Supervisor",
    department: "Electricity",
    phone: "+1 555-0102",
    email: "s.chen@locallink.gov",
    status: "Active"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Officer",
    department: "Water Works",
    phone: "+1 555-0103",
    email: "m.johnson@locallink.gov",
    status: "Active"
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Officer",
    department: "Parks & Gardens",
    phone: "+1 555-0104",
    email: "e.davis@locallink.gov",
    status: "Active"
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Admin",
    department: "All Departments",
    phone: "+1 555-0105",
    email: "r.wilson@locallink.gov",
    status: "Active"
  },
];

export const heatmapPoints = [
  { id: 1, lat: 40.7580, lng: -73.9855, category: "Potholes", severity: "high", count: 12 },
  { id: 2, lat: 40.7614, lng: -73.9776, category: "Garbage", severity: "medium", count: 8 },
  { id: 3, lat: 40.7489, lng: -73.9680, category: "Streetlights", severity: "high", count: 15 },
  { id: 4, lat: 40.7549, lng: -73.9840, category: "Water Leak", severity: "urgent", count: 5 },
  { id: 5, lat: 40.7505, lng: -73.9934, category: "Trees", severity: "low", count: 3 },
  { id: 6, lat: 40.7589, lng: -73.9851, category: "Drainage", severity: "medium", count: 7 },
];

export const analyticsData = {
  issueTrends: [
    { date: "Nov 1", issues: 45 },
    { date: "Nov 5", issues: 52 },
    { date: "Nov 10", issues: 48 },
    { date: "Nov 15", issues: 63 },
    { date: "Nov 20", issues: 71 },
    { date: "Nov 25", issues: 68 },
  ],
  resolutionTime: [
    { week: "Week 1", hours: 24 },
    { week: "Week 2", hours: 18 },
    { week: "Week 3", hours: 22 },
    { week: "Week 4", hours: 16 },
  ],
  categoryFrequency: [
    { category: "Potholes", count: 47 },
    { category: "Garbage", count: 39 },
    { category: "Streetlights", count: 28 },
    { category: "Water", count: 23 },
    { category: "Trees", count: 15 },
    { category: "Drainage", count: 12 },
  ],
};
