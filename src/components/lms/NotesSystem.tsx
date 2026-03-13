"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Save, Download, Trash2, Edit3, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Note {
  id: string;
  timestamp: string;
  content: string;
  lessonId: string;
}

export function NotesSystem({ lessonId }: { lessonId: string }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Load notes from local storage (mock persistence)
  useEffect(() => {
    const saved = localStorage.getItem(`notes_${lessonId}`);
    if (saved) setNotes(JSON.parse(saved));
  }, [lessonId]);

  const saveNote = () => {
    if (!currentNote.trim()) return;
    setIsSaving(true);
    
    const newNote: Note = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: currentNote,
      lessonId
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    localStorage.setItem(`notes_${lessonId}`, JSON.stringify(updated));
    setCurrentNote("");

    setTimeout(() => setIsSaving(false), 1000);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
    localStorage.setItem(`notes_${lessonId}`, JSON.stringify(updated));
  };

  const exportNotes = () => {
    const text = notes.map(n => `[${n.timestamp}] ${n.content}`).join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `notes_lesson_${lessonId}.txt`;
    a.click();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-black uppercase tracking-[0.2em] text-primary/60 flex items-center gap-3">
          <Edit3 className="w-5 h-5" />
          Lesson Notes
        </h2>
        {notes.length > 0 && (
          <button 
            onClick={exportNotes}
            className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Export TXT
          </button>
        )}
      </div>

      <GlassCard className="p-0 border-white/10 overflow-hidden bg-white/[0.02]">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Shift+Enter to save note at current timestamp..."
          className="w-full bg-transparent p-6 text-white/80 placeholder:text-white/10 outline-none resize-none min-h-[120px]"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.shiftKey) {
              e.preventDefault();
              saveNote();
            }
          }}
        />
        <div className="p-4 border-t border-white/5 flex justify-between items-center bg-black/20">
          <span className="text-[10px] text-white/20 font-medium">Hotkey: Shift + Enter to save</span>
          <PremiumButton 
            size="sm" 
            onClick={saveNote}
            disabled={!currentNote.trim()}
            className="gap-2"
          >
            {isSaving ? "Saving..." : <Save className="w-4 h-4" />}
            Save Note
          </PremiumButton>
        </div>
      </GlassCard>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="glass p-5 rounded-2xl border-white/5 group hover:border-primary/20 transition-all relative"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2 text-primary font-mono text-[9px] font-black">
                  <Clock className="w-3 h-3" />
                  {note.timestamp}
                </div>
                <button 
                  onClick={() => deleteNote(note.id)}
                  className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-white/20 hover:text-red-400"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light">{note.content}</p>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {notes.length === 0 && (
          <div className="text-center py-12 opacity-20 italic text-sm">
            No notes for this lesson yet.
          </div>
        )}
      </div>
    </div>
  );
}
