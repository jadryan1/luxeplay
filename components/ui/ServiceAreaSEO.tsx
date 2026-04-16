/**
 * ServiceAreaSEO — hidden but crawlable service area block for SEO/AEO.
 * Uses CSS clip technique (NOT display:none or visibility:hidden) so crawlers
 * index the content while it is visually hidden from users.
 */
export default function ServiceAreaSEO() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
      }}
    >
      <p>LuxePlay NY provides luxury soft play rentals, ball pit rentals, and kids party setups across the following locations:</p>

      <p>New York: Manhattan, Brooklyn, Queens, The Bronx, Staten Island, Long Island, Nassau County, Suffolk County, Westchester County, Rockland County, White Plains, Yonkers, New Rochelle, Mount Vernon, Scarsdale, Rye, Larchmont, Mamaroneck, Port Chester</p>

      <p>New Jersey: Newark, Jersey City, Hoboken, Montclair, Livingston, Short Hills, Summit, Millburn, Chatham, Madison, Morristown, Ridgewood, Tenafly, Englewood, Fort Lee, Edgewater, Paramus, Hackensack, Bergen County, Essex County, Morris County, Union County, Hudson County, Middlesex County, Edison, Metuchen, Westfield, Cranford, Clark, Woodbridge</p>

      <p>Pennsylvania: Philadelphia, Main Line, Bala Cynwyd, Gladwyne, Villanova, Wayne, Radnor, Bryn Mawr, Haverford, Delaware County, Montgomery County, Chester County, Bucks County, Doylestown, New Hope</p>

      <p>Connecticut: Greenwich, Stamford, Darien, Westport, Fairfield, New Canaan, Wilton, Ridgefield, Norwalk, Bridgeport, Fairfield County, Hartford County</p>
    </div>
  );
}
