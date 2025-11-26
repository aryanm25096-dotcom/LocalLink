import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { 
  Settings as SettingsIcon,
  Clock,
  Zap,
  Sparkles,
  Bell,
  Link,
  Palette,
  Upload
} from "lucide-react";

const integrations = [
  { id: "gis", name: "GIS Platform", description: "Integrate with Geographic Information System", connected: true },
  { id: "crm", name: "Municipal CRM", description: "Connect to customer relationship management", connected: true },
  { id: "email", name: "Email/SMS", description: "Enable email and SMS notifications", connected: false },
];

export function Settings() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl text-[#0F172A]">Settings</h1>
        <p className="text-sm text-[#0F172A]/60">Configure your LocalLink admin dashboard</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* App Configuration */}
        <div className="col-span-2 space-y-6">
          <Card className="border-[#ECEDEF] shadow-sm">
            <div className="p-6 border-b border-[#ECEDEF]">
              <div className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-[#0A66C2]" />
                <h2 className="text-lg text-[#0F172A]">App Configuration</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Working Hours */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#0A66C2]" />
                  <label className="text-sm text-[#0F172A]">Working Hours</label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#0F172A]/60 block mb-2">Start Time</label>
                    <Input type="time" defaultValue="09:00" />
                  </div>
                  <div>
                    <label className="text-xs text-[#0F172A]/60 block mb-2">End Time</label>
                    <Input type="time" defaultValue="17:00" />
                  </div>
                </div>
              </div>

              {/* Priority Rules */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-[#0A66C2]" />
                  <label className="text-sm text-[#0F172A]">Priority Rules</label>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Auto-escalate after 24 hours</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Mark urgent if multiple reports</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Notify supervisor for urgent issues</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              {/* Auto-routing Rules */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#0A66C2]" />
                  <label className="text-sm text-[#0F172A]">Auto-routing Rules</label>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Enable AI-based routing</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Route based on officer availability</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Consider geographic proximity</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              {/* AI Confidence Threshold */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0A66C2]" />
                    <label className="text-sm text-[#0F172A]">AI Confidence Threshold</label>
                  </div>
                  <span className="text-sm text-[#0A66C2]">75%</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={5} className="mb-2" />
                <p className="text-xs text-[#0F172A]/60">
                  Minimum confidence level for AI predictions
                </p>
              </div>

              {/* Notification Preferences */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="w-4 h-4 text-[#0A66C2]" />
                  <label className="text-sm text-[#0F172A]">Notification Preferences</label>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Email notifications</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">SMS notifications</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">In-app notifications</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F4F5F7] rounded-lg">
                    <span className="text-sm text-[#0F172A]">Daily summary reports</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Integrations */}
          <Card className="border-[#ECEDEF] shadow-sm">
            <div className="p-6 border-b border-[#ECEDEF]">
              <div className="flex items-center gap-2">
                <Link className="w-5 h-5 text-[#0A66C2]" />
                <h2 className="text-lg text-[#0F172A]">Integrations</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {integrations.map((integration) => (
                <div 
                  key={integration.id}
                  className="flex items-center justify-between p-4 border border-[#ECEDEF] rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm text-[#0F172A]">{integration.name}</h3>
                      {integration.connected && (
                        <span className="px-2 py-0.5 bg-[#0F9D58]/10 text-[#0F9D58] text-xs rounded">
                          Connected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#0F172A]/60">{integration.description}</p>
                  </div>
                  <Button 
                    variant={integration.connected ? "outline" : "default"}
                    size="sm"
                    className={integration.connected ? "" : "bg-[#0A66C2]"}
                  >
                    {integration.connected ? "Configure" : "Connect"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Branding */}
        <div className="space-y-6">
          <Card className="border-[#ECEDEF] shadow-sm">
            <div className="p-6 border-b border-[#ECEDEF]">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#0A66C2]" />
                <h2 className="text-lg text-[#0F172A]">Branding</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="text-sm text-[#0F172A] block mb-3">Municipal Logo</label>
                <div className="border-2 border-dashed border-[#ECEDEF] rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-[#0F172A]/40 mx-auto mb-2" />
                  <p className="text-sm text-[#0F172A]/60 mb-2">Upload logo</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>

              {/* Theme Color */}
              <div>
                <label className="text-sm text-[#0F172A] block mb-3">Theme Color</label>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square bg-[#0A66C2] rounded-lg cursor-pointer border-2 border-[#0A66C2]" />
                  <div className="aspect-square bg-[#1B76D1] rounded-lg cursor-pointer hover:border-2 hover:border-[#0F172A]/20" />
                  <div className="aspect-square bg-[#0F9D58] rounded-lg cursor-pointer hover:border-2 hover:border-[#0F172A]/20" />
                  <div className="aspect-square bg-[#D93025] rounded-lg cursor-pointer hover:border-2 hover:border-[#0F172A]/20" />
                </div>
                <Input 
                  type="color" 
                  defaultValue="#0A66C2"
                  className="w-full mt-3"
                />
              </div>

              {/* Header Customization */}
              <div>
                <label className="text-sm text-[#0F172A] block mb-3">Dashboard Title</label>
                <Input defaultValue="LocalLink Admin" />
              </div>

              <div>
                <label className="text-sm text-[#0F172A] block mb-3">Organization Name</label>
                <Input defaultValue="City Municipal Office" />
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <Button className="w-full bg-[#0A66C2]">
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
