import React from "react";

const CardSkeleton: React.FC = () => {
    return (
        <div className="w-full overflow-hidden rounded-lg">
            <div className="relative">
                <div className="aspect-video w-full bg-slate-700/30"></div>
            </div>
            <div className="flex grow flex-col gap-4 p-4 w-full glass-effect bg-white/10">
                <div className="flex grow flex-col gap-2 mb-6">
                    <div className="h-6 bg-slate-700/30 rounded-md w-3/4 animate-pulse"></div>
                    <div className="space-y-2 mt-2">
                        <div className="h-4 bg-slate-700/20 rounded-md w-full animate-pulse"></div>
                        <div className="h-4 bg-slate-700/20 rounded-md w-5/6 animate-pulse"></div>
                    </div>
                </div>
                <div className="h-9 bg-slate-700/30 rounded-full w-28 animate-pulse"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;