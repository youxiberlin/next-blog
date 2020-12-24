const Logo = () => (
  <span>
  <svg height="20" width="20">
    <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="1" fill="red" />
  </svg>
    ykst
    <style jsx>{`
      span {
        font-weight: bold;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        height: 30px;
        line-height: 20px;
        padding: 10px;
      }

      svg {
        margin-right: 10px;
      }
    `}</style>
  </span>	
);

export default Logo;