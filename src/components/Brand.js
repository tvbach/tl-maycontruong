// Logo mark (cropped from logo.png) + the name set in type, so it stays legible at header size.
const Brand = ({ light = false }) => (
  <span className="flex items-center gap-3">
    <img
      src="/images/logo-mark.png"
      alt=""
      width="44"
      height="47"
      className={`h-11 w-auto ${light ? 'rounded-sm bg-white p-1' : ''}`}
    />
    <span className="flex flex-col leading-none">
      <span className={`font-display text-[1.375rem] font-extrabold tracking-tight [font-stretch:115%] ${light ? 'text-white' : 'text-navy-800'}`}>
        Thanh Lịch
      </span>
      <span className={`mt-1 text-[0.8125rem] font-medium ${light ? 'text-navy-200' : 'text-muted'}`}>Máy công trình</span>
    </span>
  </span>
);

export default Brand;
