import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  X,
  LogOut,
  Wallet,
  HelpCircle,
  User,
  Monitor,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../components/contexts/theme-provider";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M10.5 12.75H3L6 9.75H9L15.75 3H20.25L10.5 12.75Z" fill="currentColor" />
    <path d="M11.25 15V13.5L21 3.75V5.25L11.25 15Z" fill="currentColor" />
    <path d="M11.25 18V16.5L21 6.75V8.25L11.25 18Z" fill="currentColor" />
    <path d="M11.25 21V19.5L15 15.75V17.25L11.25 21Z" fill="currentColor" />
  </svg>
);

const SidebarIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.538L16.6299 14.3378C16.7074 14.121 16.7605 13.8478 16.792 13.4618C16.8347 12.9394 16.835 12.2712 16.835 11.3271V8.66301C16.835 7.71885 16.8347 7.05065 16.792 6.52824C16.7605 6.14232 16.7073 5.86904 16.6299 5.65227L16.5439 5.45207C16.32 5.01264 15.9796 4.64498 15.5615 4.3886L15.3779 4.28606C15.1308 4.16013 14.8165 4.08006 14.3018 4.03801C13.7794 3.99533 13.1112 3.99504 12.167 3.99504H8.16406C8.16407 3.99667 8.16504 3.99829 8.16504 3.99992L8.16406 15.995Z" />
  </svg>
);

type UserType = {
  name: string;
  email: string;
  picture?: string;
};

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Users, label: "Users", href: "#" },
  { icon: FileText, label: "Documents", href: "#" },
  { icon: Wallet, label: "Wallet", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: HelpCircle, label: "Help", href: "#" },
];

const timezones = [
  { value: "UTC", label: "UTC (Coordinated Universal Time)" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Chicago", label: "Central Time (CT)" },
  { value: "America/Denver", label: "Mountain Time (MT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "Europe/London", label: "London (GMT)" },
  { value: "Europe/Paris", label: "Central European Time (CET)" },
  { value: "Asia/Tokyo", label: "Japan Standard Time (JST)" },
  { value: "Asia/Shanghai", label: "China Standard Time (CST)" },
  { value: "Asia/Kolkata", label: "India Standard Time (IST)" },
];

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [timezone, setTimezone] = useState("UTC");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Generate unique IDs based on user email
  const generateAccountId = (email: string) => {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = ((hash << 5) - hash) + email.charCodeAt(i);
      hash = hash & hash;
    }
    return `ACC-${Math.abs(hash).toString(16).toUpperCase().slice(0, 8).padStart(8, '0')}`;
  };

  const generateParentId = (email: string) => {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = ((hash << 3) + hash) + email.charCodeAt(i);
      hash = hash & hash;
    }
    return `PID-${Math.abs(hash).toString(16).toUpperCase().slice(0, 8).padStart(8, '0')}`;
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(storedUser);
    setUser(userData);
    // Pre-fill form with user data
    const nameParts = userData.name?.split(" ") || [];
    setFirstName(nameParts[0] || "");
    setLastName(nameParts.slice(1).join(" ") || "");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className={`min-h-screen flex ${isDark ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-gray-900"}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ width: sidebarOpen ? 256 : 64, opacity: 0 }}
        animate={{ width: sidebarOpen ? 256 : 64, opacity: 1 }}
        transition={{ width: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.3 } }}
        className={`hidden md:flex flex-col fixed left-0 top-0 h-full z-40 ${isDark ? "bg-[#111] border-r border-gray-800" : "bg-white border-r border-gray-200"}`}
      >
        <div className={`flex items-center justify-between ${sidebarOpen ? "p-4" : "p-2 justify-center"}`}>
          {sidebarOpen && <LogoIcon className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} />}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`p-2 rounded-lg transition-colors ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}>
            <SidebarIcon className="w-5 h-5" />
          </button>
        </div>

        <nav className={`flex-1 space-y-1 ${sidebarOpen ? "p-4" : "p-2"}`}>
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.href !== "#" && navigate(item.href)}
              className={`w-full flex items-center rounded-lg transition-colors ${sidebarOpen ? "gap-3 px-3 py-2.5" : "justify-center p-2"} ${isDark ? "text-gray-400 hover:bg-zinc-800/50 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Section */}
        <div className={`sticky bottom-0 z-30 py-1.5 border-t ${isDark ? "bg-[#111] border-gray-800/30" : "bg-white border-gray-200"} ${!sidebarOpen && "px-1"}`}>
          <div className={sidebarOpen ? "px-2" : "px-1"}>
            <div className="relative">
              <div className="group relative">
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className={`flex items-center w-full rounded-xl border transition-all duration-200 focus:outline-none ${sidebarOpen ? "gap-3 px-3 py-2" : "justify-center p-1.5"} ${isDark ? "bg-zinc-900 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-800/40" : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100"}`}
                >
                  {sidebarOpen && (
                    <div className="text-left flex-1 min-w-0">
                      <div className={`text-sm font-medium tracking-tight leading-tight truncate ${isDark ? "text-zinc-100" : "text-gray-900"}`}>{user.name}</div>
                      <div className={`text-xs tracking-tight leading-tight truncate ${isDark ? "text-zinc-400" : "text-gray-500"}`}>{user.email}</div>
                    </div>
                  )}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                      <div className={`w-full h-full rounded-full overflow-hidden ${isDark ? "bg-zinc-900" : "bg-white"}`}>
                        {user.picture ? (
                          <img src={user.picture} alt={user.name} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{user.name?.charAt(0).toUpperCase() || "U"}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className={`absolute bottom-full left-0 right-0 mb-2 z-50 rounded-xl shadow-lg overflow-hidden ${isDark ? "bg-[#0a0a0a] border border-zinc-800" : "bg-white border border-gray-200"}`}
                    >
                      <div className="p-1">
                        <button onClick={() => setUserMenuOpen(false)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${isDark ? "text-white bg-zinc-800" : "text-gray-900 bg-gray-100"}`}>
                          <User className="w-4 h-4" />
                          Account
                        </button>
                        <button onClick={() => { setUserMenuOpen(false); handleLogout(); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isDark ? "text-zinc-300 hover:bg-zinc-800 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}>
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                      <div className={`border-t ${isDark ? "border-zinc-800" : "border-gray-200"}`}>
                        <div className="flex items-center justify-between px-3 py-2.5">
                          <span className={`text-sm font-medium tracking-tight ${isDark ? "text-zinc-100" : "text-gray-900"}`}>Theme</span>
                          <div className={`flex items-center gap-0.5 p-0.5 rounded-full ring-1 ${isDark ? "bg-[#0a0a0a] ring-zinc-800" : "bg-gray-100 ring-gray-200"}`}>
                            <button
                              onClick={() => setTheme("system")}
                              className={`p-1.5 rounded-full transition-all ${theme === "system" ? (isDark ? "bg-zinc-700 shadow-sm" : "bg-white shadow-sm") : (isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200")}`}
                              title="System"
                            >
                              <Monitor className={`w-3.5 h-3.5 ${isDark ? "text-zinc-400" : "text-gray-500"}`} />
                            </button>
                            <button
                              onClick={() => setTheme("light")}
                              className={`p-1.5 rounded-full transition-all ${theme === "light" ? (isDark ? "bg-zinc-700 shadow-sm" : "bg-white shadow-sm") : (isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200")}`}
                              title="Light"
                            >
                              <Sun className={`w-3.5 h-3.5 ${isDark ? "text-zinc-400" : "text-gray-500"}`} />
                            </button>
                            <button
                              onClick={() => setTheme("dark")}
                              className={`p-1.5 rounded-full transition-all ${theme === "dark" ? (isDark ? "bg-zinc-700 shadow-sm" : "bg-white shadow-sm") : (isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200")}`}
                              title="Dark"
                            >
                              <Moon className={`w-3.5 h-3.5 ${isDark ? "text-zinc-400" : "text-gray-500"}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.aside>


      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && <div className="md:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setMobileMenuOpen(false)} />}

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`md:hidden fixed left-0 top-0 h-full w-64 z-50 flex flex-col ${isDark ? "bg-[#111] border-r border-gray-800" : "bg-white border-r border-gray-200"}`}
      >
        <div className="p-4 flex items-center justify-between">
          <LogoIcon className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} />
          <button onClick={() => setMobileMenuOpen(false)} className={`p-2 rounded-lg ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.href !== "#" && navigate(item.href)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isDark ? "text-gray-400 hover:bg-zinc-800/50 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 transition-[margin] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${sidebarOpen ? "md:ml-64" : "md:ml-16"}`}>
        {/* Top Header */}
        <header className={`sticky top-0 z-30 backdrop-blur-lg ${isDark ? "bg-[#0a0a0a]/80" : "bg-gray-50/80"}`}>
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(true)} className={`md:hidden p-2 rounded-lg ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}>
                <SidebarIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className={`p-2 rounded-lg relative ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}>
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
              </button>
              <button onClick={handleLogout} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isDark ? "text-gray-400 hover:bg-gray-800 hover:text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"}`}>
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Account Content */}
        <main className="p-4 md:p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Page Header */}
            <div className="mb-6">
              <h1 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Account Settings</h1>
              <p className={`text-sm mt-1 ${isDark ? "text-zinc-500" : "text-gray-500"}`}>Manage your personal information and account preferences</p>
            </div>

            {/* Tabs */}
            <div className={`flex items-center border-b w-full mb-6 ${isDark ? "border-zinc-800" : "border-gray-200"}`}>
              <ul className="flex items-center text-sm gap-6 overflow-x-auto">
                <li>
                  <button className={`pb-3 border-b-2 font-semibold text-sm transition-all ${isDark ? "border-white text-white" : "border-gray-900 text-gray-900"}`}>
                    General
                  </button>
                </li>
                <li>
                  <button className={`pb-3 border-b-2 border-transparent font-medium text-sm transition-all ${isDark ? "text-zinc-400 hover:text-zinc-300" : "text-gray-500 hover:text-gray-700"}`}>
                    Security
                  </button>
                </li>
                <li>
                  <button className={`pb-3 border-b-2 border-transparent font-medium text-sm transition-all ${isDark ? "text-zinc-400 hover:text-zinc-300" : "text-gray-500 hover:text-gray-700"}`}>
                    Notifications
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              {/* Personal Info Card */}
              <div className={`border rounded-xl overflow-hidden ${isDark ? "border-zinc-800" : "border-gray-200"}`}>
                <div className={`px-6 py-4 border-b ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
                  <h2 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Personal Info</h2>
                  <p className={`text-sm ${isDark ? "text-zinc-500" : "text-gray-500"}`}>Update your personal details</p>
                </div>
                <div className={`p-6 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors ${isDark ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400"}`}
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors ${isDark ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400"}`}
                        placeholder="Enter last name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>Email</label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        className={`w-full px-4 py-2.5 border rounded-lg cursor-not-allowed ${isDark ? "bg-zinc-800/50 border-zinc-800 text-zinc-500" : "bg-gray-100 border-gray-200 text-gray-500"}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>Mobile Number</label>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors ${isDark ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400"}`}
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* Account Info Card */}
              <div className={`border rounded-xl overflow-hidden ${isDark ? "border-zinc-800" : "border-gray-200"}`}>
                <div className={`px-6 py-4 border-b ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
                  <h2 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Account Info</h2>
                  <p className={`text-sm ${isDark ? "text-zinc-500" : "text-gray-500"}`}>Your account identifiers and preferences</p>
                </div>
                <div className={`p-6 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>Parent ID</label>
                      <input
                        type="text"
                        value={generateParentId(user.email)}
                        disabled
                        className={`w-full px-4 py-2.5 border rounded-lg cursor-not-allowed ${isDark ? "bg-zinc-800/50 border-zinc-800 text-zinc-500" : "bg-gray-100 border-gray-200 text-gray-500"}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>Account ID</label>
                      <input
                        type="text"
                        value={generateAccountId(user.email)}
                        disabled
                        className={`w-full px-4 py-2.5 border rounded-lg cursor-not-allowed ${isDark ? "bg-zinc-800/50 border-zinc-800 text-zinc-500" : "bg-gray-100 border-gray-200 text-gray-500"}`}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-zinc-400" : "text-gray-700"}`}>Timezone</label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors appearance-none cursor-pointer ${isDark ? "bg-zinc-900 border-zinc-800 text-white focus:border-zinc-600" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-gray-400"}`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${isDark ? '%2371717a' : '%236b7280'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                        }}
                      >
                        {timezones.map((tz) => (
                          <option key={tz.value} value={tz.value} className={isDark ? "bg-zinc-900 text-white" : "bg-white text-gray-900"}>
                            {tz.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${isDark ? "bg-white text-zinc-900 hover:bg-zinc-100" : "bg-gray-900 text-white hover:bg-gray-800"}`}>
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
