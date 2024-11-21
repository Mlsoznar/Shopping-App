import React from "react";

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>{money - total} TL</span> kaldı.
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span>{money} TL</span> var.
        </div>
      )}
      {money - total === 0 && <div className="header">Paranız bitti..</div>}
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: linear-gradient(to bottom, red, purple);
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          letter-spacing: 1px;
        }
        .header span {
          margin: 0 10px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Header;
