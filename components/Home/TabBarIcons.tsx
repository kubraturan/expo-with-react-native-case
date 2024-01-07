import colors from '@constants/colors';
import React from 'react';
import {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from 'react-native-svg';

function fillColor(isFocused: boolean) {
  if (isFocused) return colors.green;

  return colors.gray;
}

export const HomeIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <Path
      d="M6.50093 3.04205H18.5086C18.4422 2.22912 17.949 1.78571 17.0385 1.78571H7.96158C7.06053 1.78571 6.55784 2.22912 6.50093 3.04205ZM4.56605 5.71179H20.4435C20.3107 4.83419 19.8554 4.33535 18.85 4.33535H6.15949C5.1541 4.33535 4.69884 4.83419 4.56605 5.71179ZM5.68525 22.3214H19.3148C21.2876 22.3214 22.3214 21.3238 22.3214 19.4207V10.1182C22.3214 8.21524 21.2876 7.21756 19.3148 7.21756H5.68525C3.70294 7.21756 2.67859 8.206 2.67859 10.1182V19.4207C2.67859 21.3238 3.70294 22.3214 5.68525 22.3214Z"
      fill={fillColor(isFocused)}
    />
  </Svg>
);

export const DiagnoseIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
    <Path
      d="M21.012 4.2c-.054.004-5.591.48-8.225-2a.41.41 0 00-.57 0c-2.634 2.48-8.167 2.004-8.225 2a.406.406 0 00-.317.108.408.408 0 00-.138.304v3.863c0 12.904 8.813 14.425 8.9 14.438.021.004.046.004.067.004.021 0 .042 0 .063-.005.087-.012 8.9-1.533 8.9-14.437V4.612a.415.415 0 00-.454-.412zm-4.058 9.358c0 .23-.187.417-.416.417H13.97v2.567c0 .229-.188.416-.417.416h-2.108a.418.418 0 01-.417-.416v-2.567H8.462a.418.418 0 01-.416-.417V11.45c0-.23.187-.417.416-.417h2.567V8.467c0-.23.188-.417.417-.417h2.108c.23 0 .417.187.417.417v2.566h2.567c.229 0 .416.188.416.417v2.108z"
      fill={fillColor(isFocused)}
    />
  </Svg>
);

export const MyGardenIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
    <G clipPath="url(#clip0_3638_2142)">
      <G clipPath="url(#clip1_3638_2142)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8593 1.59441L14.7938 1.51369C14.4477 1.13701 13.8278 1.16389 13.5207 1.59437L7.79361 9.62218L7.65928 9.8164C5.17065 13.5308 6.29784 18.5946 10.1728 20.8975C11.166 21.4873 12.2572 21.8404 13.3678 21.9568L13.3684 24.1802L13.3739 24.2758C13.4214 24.6835 13.7686 25 14.1899 25C14.6437 25 15.0115 24.6329 15.0115 24.1802L15.0114 21.9568C16.1219 21.8404 17.213 21.4873 18.206 20.8976L18.4072 20.7739L18.604 20.6444C22.2307 18.1819 23.1469 13.2118 20.5854 9.6221L14.8593 1.59441ZM24.6616 18.6569C24.7527 18.2133 24.4663 17.78 24.0218 17.6891C23.5774 17.5981 23.1431 17.8839 23.052 18.3275C22.9247 18.9465 22.6293 19.4851 22.2113 19.9477C22.0071 20.1736 21.7875 20.3659 21.5694 20.5231L21.437 20.6146L21.2337 20.7383C20.8948 20.9709 20.777 21.4252 20.9741 21.7968C21.1864 22.197 21.6836 22.3496 22.0846 22.1378C22.4432 21.9483 22.9388 21.591 23.4315 21.0457C24.0348 20.3781 24.4714 19.5824 24.6616 18.6569ZM14.19 8.39839C13.7687 8.39839 13.4214 8.71488 13.3739 9.12262L13.3684 9.21823L13.3681 12.3246L12.1208 11.0516L12.0442 10.9825C11.7247 10.7289 11.2585 10.7465 10.9591 11.0388C10.6597 11.3311 10.6318 11.7958 10.8788 12.1202L10.9463 12.1981L13.3082 14.6076L13.3681 14.6619L13.3684 18.4414L13.3739 18.537C13.4214 18.9447 13.7687 19.2612 14.19 19.2612C14.5789 19.2612 14.9047 18.9915 14.9898 18.6293L15.006 18.537L15.0104 18.4561L17.7834 15.4809L17.8489 15.4012C18.0876 15.0707 18.0479 14.6068 17.7412 14.3222C17.4344 14.0376 16.9679 14.0318 16.6549 14.2934L16.5801 14.3644L15.0112 16.0474L15.0115 9.21823L15.006 9.12262C14.9585 8.71488 14.6113 8.39839 14.19 8.39839ZM6.50764 8.20212C6.76509 7.88594 6.75231 7.42052 6.46257 7.11872C6.14869 6.79176 5.62863 6.78063 5.30098 7.09385C4.98552 7.39544 4.54537 7.94071 4.11293 8.72105C3.76214 9.35406 3.47604 10.0505 3.27704 10.8082C3.16201 11.2462 3.42456 11.6943 3.86347 11.8091C4.30237 11.9239 4.75143 11.6619 4.86647 11.2239C5.02964 10.6026 5.264 10.0321 5.55082 9.51454C5.75393 9.14803 5.97049 8.83074 6.18492 8.56511L6.31538 8.40931L6.50764 8.20212Z"
          fill={fillColor(isFocused)}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_3638_2142">
        <Rect width={25} height={25} fill="white" />
      </ClipPath>
      <ClipPath id="clip1_3638_2142">
        <Rect width={25} height={25} fill="white" transform="translate(2)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ProfileIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.9521 11.772C15.3362 11.772 17.4084 9.7698 17.4084 7.16274C17.4084 4.58696 15.3362 2.67859 12.9521 2.67859C10.568 2.67859 8.49578 4.62867 8.49578 7.18359C8.49578 9.7698 10.5568 11.772 12.9521 11.772ZM5.47661 21.4286H20.4165C21.6085 21.4286 22.3215 20.9072 22.3215 20.0416C22.3215 17.3511 18.723 13.6387 12.941 13.6387C7.17002 13.6387 3.57153 17.3511 3.57153 20.0416C3.57153 20.9072 4.28455 21.4286 5.47661 21.4286Z"
      fill={fillColor(isFocused)}
    />
  </Svg>
);

export const ScannerIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width={74} height={64} viewBox="0 0 74 64" fill="none">
    <G filter="url(#filter0_i_3_7281)">
      <Circle cx={36} cy={32} r={32} fill="url(#paint0_linear_3_7281)" />
    </G>
    <Circle
      cx={36}
      cy={32}
      r={30}
      stroke="white"
      strokeOpacity={0.24}
      strokeWidth={4}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.7877 21.7857C33.2341 21.7857 33.5966 22.1506 33.5966 22.6011C33.5966 23.0506 33.2352 23.4155 32.7877 23.4155L31.0562 23.4165C29.6191 23.4187 28.4499 24.5969 28.4499 26.0447V28.0736C28.4499 28.5231 28.0864 28.889 27.64 28.889C27.1935 28.889 26.8311 28.5231 26.8311 28.0736V26.0447C26.8311 23.699 28.7263 21.7889 31.0552 21.7868L32.7867 21.7857H32.7877ZM40.412 21.786H42.1052C44.4404 21.786 46.3388 23.6972 46.3388 26.0482V28.0739C46.3388 28.5233 45.9774 28.8893 45.5299 28.8893C45.0835 28.8893 44.7211 28.5233 44.7211 28.0739V26.0482C44.7211 24.5961 43.5476 23.4147 42.1052 23.4147H40.412C39.9655 23.4147 39.6031 23.0509 39.6031 22.6014C39.6031 22.1509 39.9655 21.786 40.412 21.786ZM39.5212 25.87H33.6496C32.3061 25.8839 31.2261 26.9893 31.2378 28.343V29.702C31.241 29.8604 31.3675 29.9899 31.5248 29.9952H41.6439C41.8023 29.9909 41.9287 29.8615 41.9341 29.702V28.343C41.9351 27.6892 41.6843 27.061 41.2315 26.5934C40.7818 26.13 40.1643 25.87 39.5212 25.87ZM25.7028 31.6521H47.4683C47.9147 31.6521 48.2772 32.017 48.2772 32.4675C48.2772 32.917 47.9147 33.2808 47.4683 33.2808H46.3395V37.1653C46.3395 39.5174 44.44 41.4286 42.1058 41.4286H40.4126C39.9651 41.4286 39.6026 41.0636 39.6026 40.6131C39.6026 40.1637 39.9651 39.7988 40.4126 39.7988H42.1058C43.5482 39.7988 44.7217 38.6185 44.7217 37.1653V33.2808H41.9336V34.3627C41.9443 35.7164 40.8654 36.8228 39.5208 36.8357H33.6492C32.3057 36.8228 31.2268 35.7164 31.2374 34.3627V33.2808H28.4494V37.1696C28.4494 38.6174 29.6197 39.7956 31.0578 39.7977L32.7882 39.7988C33.2347 39.7988 33.5971 40.1637 33.5971 40.6131C33.5961 41.0636 33.2347 41.4286 32.7872 41.4286L31.0557 41.4275C28.7268 41.4253 26.8305 39.5152 26.8305 37.1696V33.2808H25.7028C25.2563 33.2808 24.8928 32.917 24.8928 32.4675C24.8928 32.017 25.2563 31.6521 25.7028 31.6521Z"
      fill="white"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_3_7281"
        x1={36}
        y1={9.53674e-7}
        x2={68}
        y2={64}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={fillColor(isFocused)} />
        <Stop offset={1} stopColor={isFocused ? '#28AF6E' : '#868687'} />
      </LinearGradient>
    </Defs>
  </Svg>
);
