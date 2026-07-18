export default function HeaderFlowSee() {
  return(
    <header data-layer="Header" className="Header w-[1440px] h-28 px-40 py-8 bg-zinc-100/50 inline-flex justify-center items-center gap-16 overflow-hidden">
  <div data-layer="CTA" className="Cta size- flex justify-start items-center gap-4">
    <div data-layer="Button" data-size="Large" data-state="default" data-type="secondary" className="Button size- px-6 py-3 bg-orange-600 rounded-lg flex justify-center items-center gap-2">
      <div data-layer="Portfolio" className="Portfolio text-center justify-center text-zinc-100 text-xl font-medium font-['IRANSansX'] leading-8">شروع پروژه</div>
    </div>
    <div data-layer="Button" data-size="Large" data-state="default" data-type="primary" className="Button size- px-6 py-3 bg-zinc-100 rounded-lg flex justify-center items-center gap-2 overflow-hidden">
      <div data-layer="Label" className="Label text-center justify-center text-orange-600 text-xl font-medium font-['IRANSansX'] leading-8">مشاوره رایگان</div>
    </div>
  </div>
  <div data-layer="Nav Menu" className="NavMenu flex-1 self-stretch flex justify-end items-center gap-2">
    <div data-layer="Button" data-size="Large" data-state="default" data-type="Text" className="Button size- px-6 py-3 rounded-lg flex justify-center items-center gap-2 overflow-hidden">
      <div data-layer="Label" className="Label text-center justify-center text-zinc-800 text-xl font-medium font-['IRANSansX'] leading-8">پورتفولیو</div>
    </div>
    <div data-layer="Button" data-size="Large" data-state="default" data-type="Text" className="Button size- px-6 py-3 rounded-lg flex justify-center items-center gap-2 overflow-hidden">
      <div data-layer="Label" className="Label text-center justify-center text-zinc-800 text-xl font-medium font-['IRANSansX'] leading-8">درباره ما</div>
    </div>
    <div data-layer="Button" data-size="Large" data-state="default" data-type="Text" className="Button size- px-6 py-3 rounded-lg flex justify-center items-center gap-2 overflow-hidden">
      <div data-layer="Label" className="Label text-center justify-center text-zinc-800 text-xl font-medium font-['IRANSansX'] leading-8">خدمات ما</div>
    </div>
    <div data-layer="Button" data-size="Large" data-state="active" data-type="Text" className="Button size- px-6 py-3 rounded-lg flex justify-center items-center gap-2 overflow-hidden">
      <div data-layer="Label" className="Label text-center justify-center text-orange-600 text-xl font-medium font-['IRANSansX'] leading-8">صفحه اصلی</div>
    </div>
  </div>
  <div data-svg-wrapper data-layer="Frame 17" className="Frame17 relative">
    <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6885 39.042C19.9295 37.3949 23.0437 37.3653 24.7549 37.4932C24.6763 37.9536 24.3466 39.2041 24.1006 39.8184C22.4175 44.0168 20.246 45.9385 19.6006 46.5684C18.3129 47.8241 15.5454 50.3416 11.3848 51.4346C10.6455 51.6293 9.40304 51.858 8 51.9316C8.4806 49.5403 9.47559 42.7095 16.6885 39.042ZM52.2354 19.7314C52.2353 20.4028 52.1813 21.1935 52.0146 22.0645C51.6833 23.7949 51.0417 25.134 50.5146 26.0254C49.848 27.0709 48.6029 28.7016 46.5508 29.8672C45.3185 30.5667 44.2295 30.847 43.4863 31.0176C39.7589 31.8751 36.502 31.4757 32.9258 31.2422C27.644 30.8972 24.9479 30.7362 22.29 31.3438C18.6188 32.1828 16.2889 33.7046 15.6299 34.1523C14.6067 34.8481 12.1517 36.5561 10.334 39.7158C10.2488 39.863 10.1813 39.986 10.1367 40.0693C10.3063 38.9395 10.6343 37.3017 11.3242 35.4346C12.0704 33.4152 13.988 28.3378 18.7793 25.3486C22.0552 23.3052 25.4758 22.8549 29.2207 23.0254C32.8882 23.1921 33.1845 23.1937 37.5264 23.3623V23.3643C40.9505 23.497 44.2158 23.7144 47.5488 22.6729C49.874 21.9462 51.4059 20.4776 52.2354 19.7314ZM56 5C55.4225 8.47452 53.8024 11.1767 51.168 13.2764C48.7291 15.2201 45.9006 16.0558 42.8193 16.0771C38.6035 16.1062 34.3857 16.1557 30.1709 16.0908C22.5764 15.9736 16.9971 19.4306 12.9004 25.6162C12.7735 25.8089 12.6326 25.9922 12.3887 26.333C12.8702 23.6812 13.2445 21.2033 13.7871 18.7637C14.226 16.789 14.619 14.7416 15.4678 12.9307C17.6247 8.32926 21.434 5.78436 26.4453 5.1875C28.5507 4.9366 30.7005 5.02338 32.8301 5.01758C40.137 4.99723 47.4441 5.00388 54.751 5H56Z" fill="#FE5400"/>
    </svg>
  </div>
</header>
  )
}