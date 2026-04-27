import React from 'react';

// Devopstrio AVD Onboarding Accelerator
// Executive Provisioning & Workspace Readiness Command Center

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Global Provisioning Header */}
            <header className="border-b border-white/5 bg-black/40 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(79,70,229,0.4)] border border-white/10 relative overflow-hidden">
                            OA
                            <div className="absolute top-0 right-0 w-2 h-2 bg-indigo-400 rounded-full m-1 border border-black shadow-[0_0_50px_10px_rgba(129,140,248,0.5)]"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">ONBOARDING ACCELERATOR</h1>
                            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mt-2 italic">Hyper-Scale Workforce Enablement</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-indigo-400 border-b-2 border-indigo-500 pb-10 pt-10">Provisioning Board</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Workspace Templates</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Identity Sync</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Approved Blueprints</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Analytics</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Onboarding Health & SLA Scorecards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Users Provisioned (30d)', value: '1,420', status: '+12% growth', color: 'indigo' },
                        { label: 'Avg. Onboarding SLA', value: '4.2m', status: 'Optimal', color: 'emerald' },
                        { label: 'Template Compliance', value: '100%', status: 'Standardized', color: 'indigo' },
                        { label: 'Active M&A Sprints', value: '2', status: 'In-Discovery', color: 'purple' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Automation Intelligence Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Active Provisioning Feed */}
                    <div className="xl:col-span-2 bg-slate-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Real-Time Provisioning Stream</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-lg">Monitoring automated identity synchronization and workspace allocation across global regions.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10">
                                    Export SLA Audit
                                </button>
                                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-900/40">
                                    New Onboarding Sprint
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { user: 'Engineering APAC Cluster', phase: 'Host Pool Expansion', prog: 85, region: 'East Asia', status: 'Running' },
                                { user: 'Finance EMEA Group', phase: 'Conditional Access Sync', prog: 42, region: 'North Europe', status: 'Waiting Approval' },
                                { user: 'Marketing Temporary - Seasonal', phase: 'Licensing Assignment', prog: 12, region: 'UK South', status: 'Running' },
                                { user: 'DevOps Platform Team', phase: 'Profile Storage Init', prog: 100, region: 'East US 2', status: 'Complete' }
                            ].map((row, idx) => (
                                <div key={idx} className="p-8 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-indigo-500/20 transition-all">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
                                                <span className="text-indigo-400 text-lg font-black">{idx + 1}</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-white">{row.user}</div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{row.region} &bull; {row.phase}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${row.status === 'Complete' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                                                {row.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 transition-all duration-1000" style={{ width: `${row.prog}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Template Catalog & Governance Stack */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-indigo-600 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(79,70,229,0.3)] relative overflow-hidden group border border-white/10">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-all"></div>
                            <h4 className="text-[10px] font-black text-indigo-100 uppercase tracking-widest mb-4">M&A Ready Blueprint</h4>
                            <div className="text-2xl font-black text-white tracking-tight mb-4">External Tenant Sync Active</div>
                            <p className="text-sm text-indigo-500 bg-white/90 font-black px-6 py-4 rounded-2xl shadow-xl leading-relaxed">
                                Identify and map 4,200 identities from subsidiary tenant into Global AVD Governance ring.
                            </p>
                        </div>

                        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-8 border-b border-white/5 pb-6">Template Popularity</h3>
                            <div className="space-y-8 flex-1">
                                {[
                                    { tpl: 'Standard Office Pro', usage: 1420, trend: '+4%', col: 'indigo' },
                                    { tpl: 'Secure Finance Zone', usage: 840, trend: '+12%', col: 'purple' },
                                    { tpl: 'Developer GPU Lab', usage: 320, trend: 'stable', col: 'pink' },
                                    { tpl: 'Seasonal Contractor', usage: 2200, trend: '+42%', col: 'emerald' }
                                ].map((tpl, i) => (
                                    <div key={i} className="flex items-center gap-6 group cursor-pointer">
                                        <div className={`w-3 h-3 rounded-full bg-${tpl.col}-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]`}></div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{tpl.tpl}</span>
                                                <span className="text-[10px] font-black text-slate-500 font-mono">{tpl.usage} Users</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <div className={`h-full bg-${tpl.col}-500 transition-all`} style={{ width: `${(tpl.usage / 3000) * 100}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-black py-4 rounded-2xl uppercase tracking-widest transition-all">
                                Manage Blueprints
                            </button>
                        </div>
                    </div>

                </div>

                {/* Compliance & Performance Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl">
                        <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10">Onboarding SLA Performance</h5>
                        <div className="flex items-end gap-1.5 h-32 px-2">
                            {[12, 14, 11, 28, 42, 18, 14, 12, 10, 8, 12, 14, 9, 7].map((v, i) => (
                                <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-lg hover:bg-indigo-500 transition-all relative group cursor-pointer" style={{ height: `${v * 2}%` }}>
                                    <div className="absolute -top-10 left-1/2 -ms-4 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl pointer-events-none transition-all">
                                        {v}m
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-between items-center text-[10px] font-black text-slate-600 uppercase tracking-widest">
                            <span>April 14</span>
                            <span>Today (Accelerated)</span>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl flex flex-col justify-between">
                        <div>
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Governance Drift Report</h5>
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-400">Naming Standards</span>
                                    <span className="text-emerald-400 font-black tracking-widest">PASSED</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-400">Resource Tagging</span>
                                    <span className="text-emerald-400 font-black tracking-widest">PASSED</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-400">Entra Group Consistency</span>
                                    <span className="text-amber-400 font-black tracking-widest">SYNCING</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[11px] font-medium text-slate-500 leading-relaxed mt-10 italic">
                            All onboarding requests are currently compliant with <span className="font-bold text-white">Security-Ring-Zero</span> policy requirements.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
