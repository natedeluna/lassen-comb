"use client";

const BlurBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 isolate z-[100] h-[50px]">
      <div
        style={{ WebkitBackdropFilter: "blur(1px)", backdropFilter: "blur(1px)" }}
        className="absolute inset-0 gradient-mask-b-0 blur-[1px]"
      ></div>
      <div
        style={{ WebkitBackdropFilter: "blur(2px)", backdropFilter: "blur(2px)" }}
        className="absolute inset-0 gradient-mask-b-0 blur-[2px]"
      ></div>
      <div
        style={{ WebkitBackdropFilter: "blur(3px)", backdropFilter: "blur(3px)" }}
        className="absolute inset-0 gradient-mask-b-0 blur-[3px]"
      ></div>
      <div
        style={{ WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)" }}
        className="absolute inset-0 gradient-mask-b-0 blur-[6px]"
      ></div>
      <div
        style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}
        className="absolute inset-0 gradient-mask-b-0 blur-[12px]"
      ></div>
    </div>
  );
};

export default BlurBar;