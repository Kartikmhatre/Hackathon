import { useState } from "react";
import {
  X,
  Search,
  Clock,
  ChevronDown,
  User,
  Wrench,
} from "lucide-react";

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom icons matching the design
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
    <path d="M26 24a2 2 0 0 0-2 2c0 .076.014.149.023.223A12.9 12.9 0 0 1 16 29c-4.262 0-8-3.972-8-8.5c0-4.687 3.813-8.5 8.5-8.5h.5v-2h-.5C10.71 10 6 14.71 6 20.5c0 1.884.53 3.69 1.437 5.257C4.724 23.371 3 19.886 3 16c0-2.115.492-4.133 1.462-5.996l-1.774-.923A15.05 15.05 0 0 0 1 16c0 8.271 6.729 15 15 15c3.374 0 6.582-1.12 9.205-3.166A2 2 0 1 0 26 24" />
    <path d="M13 20v2h-2v-2zm8-10v2h-2v-2z" />
    <path d="M16 1c-3.374 0-6.582 1.12-9.205 3.166A2 2 0 1 0 8 6c0-.076-.014-.149-.023-.223A12.9 12.9 0 0 1 16 3c4.262 0 8 3.972 8 8.5c0 4.687-3.813 8.5-8.5 8.5H15v2h.5C21.29 22 26 17.29 26 11.5c0-1.885-.532-3.692-1.44-5.26C27.275 8.626 29 12.112 29 16c0 2.115-.492 4.133-1.462 5.996l1.774.923A15.05 15.05 0 0 0 31 16c0-8.271-6.729-15-15-15" />
  </svg>
);

const NewChatIcon = () => (
  <svg width="20" height="20" viewBox="144 144 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m596.8 274.05h-23.617v-47.234c0.085937-2.4961-1.0195-4.8828-2.9727-6.4375-1.957-1.5508-4.5352-2.082-6.9453-1.4336l-163.27 43.453-163.27-43.453c-2.4141-0.64844-4.9922-0.11719-6.9453 1.4336-1.957 1.5547-3.0625 3.9414-2.9766 6.4375v47.23l-23.613 0.003906c-4.3477 0-7.875 3.5234-7.875 7.8711v291.27c0 2.0859 0.83203 4.0898 2.3086 5.5664 1.4766 1.4766 3.4766 2.3047 5.5664 2.3047h393.6c2.0859 0 4.0898-0.82813 5.5664-2.3047 1.4727-1.4766 2.3047-3.4805 2.3047-5.5664v-291.27c0-2.0859-0.83203-4.0898-2.3047-5.5664-1.4766-1.4766-3.4805-2.3047-5.5664-2.3047zm-39.363 223.72-149.57 39.359 0.003906-260.48 149.57-39.359zm-165.31-221.12v260.64l-149.57-39.359 0.003906-216.01v-44.871zm196.8 288.67h-377.86v-275.52h15.742v214.04c-0.125 3.6562 2.2891 6.9219 5.8281 7.8711l165.31 43.77c1.3125 0.34375 2.6992 0.34375 4.0117 0l165.31-43.77c3.5391-0.94922 5.9531-4.2148 5.8281-7.8711v-214.04h15.742z" />
  </svg>
);

const SidebarIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.538L16.6299 14.3378C16.7074 14.121 16.7605 13.8478 16.792 13.4618C16.8347 12.9394 16.835 12.2712 16.835 11.3271V8.66301C16.835 7.71885 16.8347 7.05065 16.792 6.52824C16.7605 6.14232 16.7073 5.86904 16.6299 5.65227L16.5439 5.45207C16.32 5.01264 15.9796 4.64498 15.5615 4.3886L15.3779 4.28606C15.1308 4.16013 14.8165 4.08006 14.3018 4.03801C13.7794 3.99533 13.1112 3.99504 12.167 3.99504H8.16406C8.16407 3.99667 8.16504 3.99829 8.16504 3.99992L8.16406 15.995Z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z" />
  </svg>
);

interface ChatItem {
  id: string;
  title: string;
  time: string;
}

export function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [chatsExpanded, setChatsExpanded] = useState(true);
  const [chats] = useState<ChatItem[]>([]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-[260px] flex flex-col z-50 transition-all duration-300 ease-in-out border-r bg-[#141414] border-gray-800/50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Chat history"
      >
        {/* Header */}
        <div className="sticky top-0 z-30 bg-[#141414]">
          <div className="px-2">
            <div id="sidebar-header" className="h-14 flex items-center justify-between">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors text-white hover:bg-[#1a1a1a]"
                aria-label="Go to home"
              >
                <HomeIcon />
              </button>
              <div className="flex">
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors text-gray-400 hover:bg-[#1a1a1a]"
                  aria-label="Close sidebar"
                >
                  <SidebarIcon className="hidden md:block" />
                  <X className="w-5 h-5 md:hidden" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <aside className="pt-2 px-2 relative bg-[#141414]">
          <button className="group w-full flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors text-gray-200 hover:bg-[#1a1a1a]">
            <div className="flex items-center justify-center text-gray-400">
              <NewChatIcon />
            </div>
            <div className="flex min-w-0 grow items-center gap-2.5">
              <span className="truncate text-sm">New chat</span>
            </div>
            <div className="text-gray-500 text-xs hidden group-hover:flex items-center gap-0.5">
              <kbd className="font-sans">Ctrl</kbd>+<kbd className="font-sans">Shift</kbd>+<kbd className="font-sans">O</kbd>
            </div>
          </button>

          <button className="group w-full flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors text-gray-200 hover:bg-[#1a1a1a]">
            <div className="flex items-center justify-center text-gray-400">
              <SearchIcon />
            </div>
            <div className="flex min-w-0 grow items-center gap-2.5">
              <span className="truncate text-sm">Search</span>
            </div>
            <div className="text-gray-500 text-xs hidden group-hover:flex items-center gap-0.5">
              <kbd className="font-sans">Ctrl</kbd>+<kbd className="font-sans">K</kbd>
            </div>
          </button>

          <button className="group w-full flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors text-gray-200 hover:bg-[#1a1a1a]">
            <div className="flex items-center justify-center text-gray-400">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex min-w-0 grow items-center gap-2.5">
              <span className="truncate text-sm">History</span>
            </div>
          </button>
        </aside>

        {/* Advanced Tools */}
        <div className="px-2 py-1">
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className="group w-full flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors text-gray-200 hover:bg-[#1a1a1a]"
          >
            <div className="flex items-center justify-center text-gray-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="flex min-w-0 grow items-center gap-2.5">
              <span className="truncate text-sm">Advanced Tools</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          <button
            onClick={() => setChatsExpanded(!chatsExpanded)}
            className="flex items-center gap-1 px-4 py-1.5 text-gray-500"
          >
            <h2 className="text-xs font-medium">Your chats</h2>
            <ChevronDown className={`w-3 h-3 transition-transform ${chatsExpanded ? "" : "-rotate-90"}`} />
          </button>

          {chatsExpanded && (
            <div className="flex-1 overflow-y-auto px-2">
              <div className="space-y-0.5 pb-4">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-[#1a1a1a] transition-colors text-left"
                  >
                    <span className="truncate">{chat.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Section */}
        <div className="sticky bottom-0 z-30 py-1.5 border-t bg-[#141414] border-gray-800/30">
          <div className="px-2">
            <button className="group w-full flex items-center gap-3 px-3 py-2.5 border rounded-xl transition-all duration-200 bg-[#111] hover:bg-[#1a1a1a] border-[#222] hover:border-[#333]">
              <div className="w-9 h-9 rounded-full border flex items-center justify-center bg-[#252525] border-[#444]">
                <User className="w-4 h-4 text-gray-300" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-sm font-medium text-gray-300">Guest</div>
                <div className="text-xs text-gray-600">Sign in to sync</div>
              </div>
              <span className="text-xs px-3 py-1.5 border rounded-lg transition-colors font-medium bg-[#1a1a1a] hover:bg-[#252525] border-[#333] text-gray-300">
                Sign In
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ChatSidebar;
