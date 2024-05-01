"use client";

const GradientBlur = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        bottom: "auto",
        height: "50px",
        pointerEvents: "none",
        transform: "rotate(180deg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          backdropFilter: "blur(0.5px)",
          WebkitBackdropFilter: "blur(0.5px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 4,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 6,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 7,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%)", // Adjusted gradient for Safari
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 8,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)", // Vendor prefix for Safari
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%)", // Adjusted gradient for Safari
        }}
      />
    </div>
  );
};

export default GradientBlur;