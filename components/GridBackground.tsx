export default function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex justify-center overflow-hidden">
      {/* Repeating SVG Grid - Increased opacity from 0.04 to 0.15 to make it brighter */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial mask to fade out the edges into the black background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />
    </div>
  );
}
