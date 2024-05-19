import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              width="130"
              height="40"
              viewBox="0 0 130 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M110.435 28.5711C109.521 28.5833 108.614 28.4315 107.756 28.1231C106.985 27.8457 106.285 27.4069 105.704 26.837C105.123 26.2672 104.675 25.5798 104.39 24.8225C104.071 23.9779 103.913 23.0824 103.925 22.1814C103.914 21.2766 104.071 20.3776 104.39 19.5288C104.677 18.7685 105.125 18.077 105.705 17.5002C106.289 16.9335 106.986 16.4919 107.752 16.2031C108.608 15.8876 109.517 15.7325 110.431 15.7459C111.349 15.7332 112.262 15.8882 113.123 16.2031C113.893 16.4895 114.595 16.9313 115.182 17.5002C115.761 18.0772 116.21 18.7686 116.498 19.5288C116.816 20.3777 116.973 21.2767 116.962 22.1814C116.974 23.0824 116.817 23.9777 116.498 24.8225C116.208 25.5779 115.759 26.2648 115.182 26.8385C114.596 27.4062 113.894 27.8442 113.123 28.1231C112.261 28.4304 111.351 28.5822 110.435 28.5711ZM110.435 18.2659C109.925 18.2485 109.42 18.367 108.973 18.6088C108.594 18.8265 108.273 19.1291 108.035 19.4922C107.792 19.8745 107.623 20.2981 107.536 20.7414C107.439 21.2149 107.39 21.697 107.39 22.1802C107.389 22.6593 107.438 23.1372 107.536 23.6065C107.625 24.049 107.794 24.4721 108.035 24.8556C108.269 25.2225 108.591 25.5265 108.973 25.7402C109.423 25.9739 109.927 26.0878 110.435 26.0705C110.947 26.0867 111.454 25.973 111.909 25.7402C112.296 25.5289 112.623 25.2246 112.859 24.8556C113.1 24.4719 113.269 24.0489 113.358 23.6065C113.456 23.1372 113.505 22.6593 113.505 22.1802C113.505 21.697 113.456 21.215 113.358 20.7414C113.272 20.2982 113.103 19.8747 112.859 19.4922C112.619 19.1272 112.293 18.8242 111.909 18.6088C111.457 18.368 110.948 18.2497 110.435 18.2659ZM88.2627 28.5711C87.4036 28.5884 86.5524 28.4067 85.7776 28.0408C85.0831 27.703 84.4783 27.2103 84.011 26.6019C83.5383 25.9742 83.1844 25.2677 82.9664 24.5162C82.7315 23.7194 82.6142 22.8934 82.6182 22.0636C82.6147 21.261 82.7321 20.4622 82.9664 19.6934C83.1849 18.9635 83.5392 18.2799 84.011 17.6774C84.5049 17.0551 85.1404 16.5559 85.8662 16.22C86.592 15.8841 87.3879 15.7209 88.1896 15.7436C88.9253 15.7412 89.6527 15.8972 90.3207 16.2008C90.9751 16.492 91.5295 16.9641 91.9166 17.5596H91.9654V11.4282H95.4255V28.2648H92.1372V26.7082H92.0884C91.7189 27.3342 91.1619 27.8324 90.4936 28.1345C89.7897 28.4336 89.0293 28.5824 88.2627 28.5711ZM89.1147 18.2659C88.6146 18.2504 88.1191 18.3643 87.6777 18.5962C87.2976 18.8078 86.9757 19.1075 86.7399 19.4694C86.4966 19.8491 86.3233 20.2681 86.228 20.7071C86.1215 21.1833 86.0686 21.6697 86.0701 22.1574C86.071 22.6339 86.1283 23.1087 86.2408 23.5722C86.3457 24.0201 86.5313 24.4459 86.7886 24.8294C87.0345 25.193 87.3587 25.4989 87.7381 25.7254C88.1561 25.9624 88.6325 26.081 89.1147 26.0682C89.6093 26.0855 90.0997 25.9727 90.5354 25.7414C90.9109 25.5268 91.2255 25.2226 91.45 24.8568C91.6844 24.4683 91.8493 24.0431 91.9375 23.5996C92.0353 23.1184 92.0839 22.6287 92.0826 22.1379C92.0859 21.6503 92.0388 21.1636 91.9422 20.6854C91.8553 20.2493 91.6855 19.8332 91.4419 19.4591C91.208 19.1074 90.8956 18.8131 90.5284 18.5985C90.0967 18.3641 89.6086 18.2492 89.1158 18.2659H89.1147ZM73.3023 28.5711C72.527 28.5947 71.754 28.4745 71.0238 28.2168C70.4745 28.0116 69.9908 27.6655 69.6229 27.2145C69.2666 26.7475 69.021 26.2078 68.9044 25.6351C68.7613 24.9586 68.6921 24.2689 68.6978 23.5779V16.0728H72.1579V22.9585C72.1057 23.7392 72.274 24.5188 72.6442 25.2111C72.8424 25.4719 73.106 25.6775 73.4091 25.8077C73.7123 25.9379 74.0447 25.9883 74.3737 25.9539C74.7558 25.9877 75.1406 25.9318 75.4966 25.7908C75.8525 25.6497 76.1694 25.4275 76.4212 25.1425C76.9122 24.3378 77.1339 23.4015 77.0549 22.4659V16.0728H80.515V28.2648H77.2255V26.5665H77.1524C76.7545 27.2358 76.1595 27.7702 75.4462 28.0991C74.7746 28.4073 74.0432 28.5683 73.3023 28.5711ZM52.348 28.5711C51.6275 28.5719 50.9088 28.5007 50.203 28.3585C49.5456 28.2335 48.9154 27.996 48.3412 27.6568C47.7529 27.3105 47.2669 26.8188 46.9313 26.2303C46.5958 25.6419 46.4224 24.9773 46.4284 24.3025H49.7178C49.7097 24.6278 49.7898 24.9493 49.95 25.2339C50.0992 25.4869 50.3033 25.7043 50.5477 25.8705C50.8035 26.0404 51.0881 26.1638 51.3881 26.2351C51.7114 26.3128 52.0431 26.3511 52.3759 26.3494C52.6338 26.3476 52.8909 26.3196 53.1431 26.2659C53.3982 26.2155 53.6442 26.1281 53.8732 26.0065C54.0891 25.8916 54.2762 25.7307 54.421 25.5356C54.5735 25.3177 54.6504 25.0572 54.6404 24.7928C54.6404 24.2922 54.2922 23.9105 53.6051 23.6602C52.6618 23.3418 51.6967 23.0897 50.7172 22.9059C50.2135 22.7916 49.7178 22.6648 49.2431 22.5162C48.7918 22.3789 48.3621 22.1804 47.9663 21.9265C47.6008 21.691 47.2928 21.3788 47.0644 21.0122C46.8259 20.6 46.707 20.1311 46.7209 19.6568C46.6934 18.9811 46.8582 18.3114 47.1968 17.7231C47.5058 17.2286 47.9371 16.8193 48.4503 16.5334C48.9961 16.234 49.5889 16.0266 50.2042 15.9196C50.8636 15.8014 51.5326 15.7421 52.2029 15.7425C52.8696 15.7414 53.5348 15.8049 54.1889 15.9322C54.7947 16.0446 55.376 16.2601 55.9067 16.5688C56.4102 16.8683 56.839 17.2752 57.1615 17.7596C57.5163 18.3254 57.721 18.9699 57.7569 19.6339H54.4686C54.4747 19.3689 54.4076 19.1072 54.2745 18.8768C54.1415 18.6464 53.9474 18.4558 53.713 18.3254C53.2118 18.0875 52.6605 17.97 52.1042 17.9825C51.8929 17.9835 51.6818 17.9953 51.4717 18.0179C51.258 18.038 51.0487 18.0897 50.8507 18.1711C50.6672 18.2475 50.5043 18.3649 50.3748 18.5139C50.2382 18.685 50.1694 18.899 50.181 19.1162C50.1774 19.2554 50.2062 19.3936 50.2652 19.5201C50.3241 19.6467 50.4116 19.7583 50.521 19.8465C50.7854 20.0536 51.0876 20.2088 51.4113 20.3036C51.823 20.4335 52.2419 20.5399 52.666 20.6225C53.1419 20.7185 53.6259 20.8214 54.103 20.9288C54.601 21.0375 55.093 21.1714 55.5771 21.3299C56.0314 21.4754 56.4615 21.6856 56.8539 21.9539C57.2218 22.2081 57.5291 22.538 57.7546 22.9208C57.9944 23.3581 58.1122 23.8503 58.0958 24.3471C58.1201 25.0514 57.9475 25.7488 57.5967 26.3631C57.274 26.8956 56.8277 27.3452 56.2944 27.6751C55.7292 28.015 55.1058 28.2505 54.4547 28.3699C53.7607 28.5038 53.0552 28.5712 52.348 28.5711ZM65.0172 28.3814C64.5076 28.3831 63.9986 28.3475 63.4943 28.2751C63.0496 28.2154 62.62 28.0756 62.2268 27.8625C61.8619 27.6565 61.5625 27.3546 61.3621 26.9905C61.1324 26.529 61.0235 26.0183 61.0452 25.5048V18.3139H58.9513V16.0728H61.0464V12.4191H64.5064V16.0762H67.0403V18.3162H64.5064V24.3528C64.4579 24.7526 64.5622 25.1559 64.7989 25.4842C65.1415 25.7144 65.557 25.815 65.9689 25.7676C66.1581 25.7676 66.3473 25.7596 66.5284 25.7436C66.7095 25.7276 66.8766 25.7036 67.0403 25.6728V28.2671C66.7174 28.3166 66.3918 28.3479 66.0653 28.3608C65.7264 28.3745 65.3735 28.3825 65.0183 28.3825L65.0172 28.3814ZM130 28.2648H118.426V25.7414L124.981 18.5962H118.914V16.0728H129.535V18.5962L122.981 25.7414H130V28.2636V28.2648ZM101.59 28.2648H98.1311V16.0728H101.591V28.2636L101.59 28.2648ZM101.59 14.1871H98.1311V11.4282H101.591V14.1859L101.59 14.1871Z"
                fill="white"
              />
              <path
                d="M40.6249 20C40.6249 23.9556 39.4336 27.8224 37.2016 31.1114C34.9697 34.4004 31.7973 36.9638 28.0857 38.4776C24.3741 39.9913 20.2899 40.3874 16.3497 39.6157C12.4095 38.844 8.79013 36.9392 5.94939 34.1421C3.10864 31.3451 1.17407 27.7814 0.390307 23.9018C-0.393453 20.0222 0.008801 16.0008 1.5462 12.3463C3.0836 8.69181 5.6871 5.56823 9.02746 3.37061C12.3678 1.17298 16.295 0 20.3125 0C25.6996 0 30.8662 2.10714 34.6755 5.85786C38.4848 9.60859 40.6249 14.6957 40.6249 20Z"
                fill="#ED357E"
              />
              <path
                d="M11.375 18.3999V16.0559H13.4492V15.0696C13.4287 14.5606 13.5104 14.0525 13.6896 13.5746C13.8689 13.0966 14.1422 12.6582 14.4938 12.2845C14.9183 11.8975 15.4197 11.6013 15.9663 11.4146C16.5129 11.228 17.0928 11.1549 17.6695 11.1999C17.9791 11.1999 18.2886 11.2121 18.5981 11.2365C18.9076 11.2609 19.2083 11.2815 19.5 11.2982V13.9108C19.079 13.8605 18.6554 13.8357 18.2313 13.8365C18.0481 13.8189 17.8631 13.8395 17.6885 13.897C17.5139 13.9545 17.3536 14.0476 17.218 14.1702C16.9829 14.4962 16.8746 14.8945 16.9128 15.2925V16.0559H19.3038V18.3999H16.9139V28.7999H13.4492V18.3999H11.375Z"
                fill="#FEFEFE"
              />
              <path
                d="M25.6228 28.8003V18.4643H21.125V16.1374C21.7371 16.1534 22.3493 16.1074 22.952 16.0003C23.5084 15.9074 24.0444 15.7206 24.5363 15.4483C25.0025 15.186 25.4074 14.8301 25.7249 14.4037C26.066 13.9278 26.2851 13.3777 26.3633 12.8003H29.25V28.8003H25.6228Z"
                fill="#FEFEFE"
              />
            </svg>
          </a>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;