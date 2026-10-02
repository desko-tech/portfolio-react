import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Layers, Sparkles, Zap, ArrowRight, Plus, Trash2, Clock, ListTodo } from 'lucide-react';

const Preview = () => {

    // Demo state for the interactive task manager section
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Finalize landing page UI', completed: true, category: 'Design' },
        { id: 2, text: 'Add Framer Motion animations', completed: false, category: 'Code' },
        { id: 3, text: 'Prepare Taskfusion launch', completed: false, category: 'Marketing' },
    ]);

    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, category: 'Task' }]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-slate-200 bg-slate-900/40 border border-slate-700 rounded-xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative">

        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <ListTodo className="text-fuchsia-400 w-6 h-6" /> Your Task Management Center
        </h3>

        {/* Add task form */}
        <form onSubmit={addTask} className="flex gap-2 mb-6">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Type a new task..."
                className="flex-1 bg-slate-900 border border-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-slate-200 placeholder:text-slate-500 transition-all"
            />
            <button aria-label="Add task" type="submit" className="px-4 py-3 text-cyan-50 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors flex items-center justify-center">
                <Plus className="w-5 h-5" />
            </button>
        </form>

        {/* Task list with animations */}
        <div className="space-y-2">
        <AnimatePresence initial={false}>
            {tasks.map((task) => (
                <motion.div
                    key={task.id}
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    exit={{ x: 50 }}
                    transition={{ duration: 0.3, ease: [0.2, 1, 0.6, 1] }}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    task.completed 
                        ? 'bg-slate-950/40 border-slate-700 opacity-90 hover:border-cyan-900' 
                        : 'bg-slate-950 border-slate-600/70 hover:border-cyan-800'
                    }`}>
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <button type="button"
                            title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}    
                            onClick={() => toggleTask(task.id)}
                            className="text-slate-700 hover:text-cyan-400 transition-colors shrink-0">
                            {task.completed ? <CheckCircle className="w-5 h-5 text-cyan-400 fill-cyan-400/10" /> : <ListTodo className="w-5 h-5 text-slate-200" />}
                        </button>
                        <span className={`truncate ${task.completed ? 'line-through text-slate-400' : ''}`}>
                            {task.text}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 ml-4">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 hidden sm:inline">
                            {task.category}
                        </span>
                        <button onClick={() => deleteTask(task.id)}
                                className="text-slate-500 hover:text-red-500 p-1 rounded transition-colors"
                                title='Delete task from list'>
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>

        {tasks.length === 0 && (
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-6">
                Well Done! All tasks completed! Time to relax. 
                <img src={`${import.meta.env.BASE_URL}relax-mode.svg`} alt="Relaxed person sitting comfortably with a calm smile in a warm, minimal room with soft light and a small plant. The scene feels peaceful and restorative. Text on the image reads Well Done! All tasks completed! Time to relax." 
                     className='max-w-80 mt-10 mx-auto'/>
            </motion.p>
        )}
        </div>
    </motion.div>
  )
}

export default Preview