import GitHub from "github-api";
import URLSafeBase64 from "urlsafe-base64";
import sha1 from "sha1";

export const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

export const github = new GitHub({
  username: "nicholasadamou",
  token: process.env.REACT_APP_GITHUB_TOKEN,
});

export const useCloudinary = (public_id, transformation) => {
  if (!transformation) transformation = `q_auto,f_auto`;

  const to_sign = [decodeURI(transformation), decodeURI(public_id)].join("/");

  const signature = `s--${URLSafeBase64.encode(
    sha1(to_sign + process.env.REACT_APP_CLOUDINARY_API_SECRET).slice(0, 8)
  )}--`;

  return `https://res.cloudinary.com/nicholasadamou/image/fetch/${[
    signature,
    to_sign,
  ].join("/")}`;
};

export default {
  isMobile,
  github,
  useCloudinary,
};
