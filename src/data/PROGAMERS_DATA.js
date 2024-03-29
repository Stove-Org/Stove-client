const DUMMY_DATA = [
  {
    id: 1,
    nickname: "Faker",
    name: "이상혁",
    position: "MID",
    birthday: "1996-05-07",
    career: {
      worlds: 3,
      msi: 2,
      lck: 10,
    },
    imgUrl:
      "https://w.namu.la/s/7b1c8dd27fb700145953bf02acfad9a27b22ea61d8eb0aea3e9068d241231694041d16f21b7f967ba3f617b0bf8f4dc35120cdce4fdb63503fafbdcb837ff14394f66d71302977425aa55e14e4935e9cfbee4eefc4331f4ef25205c0cbf58525bf2ccd027f2199d1fc19f65b9ef6d411",
  },
  {
    id: 2,
    nickname: "Chovy",
    name: "정지훈",
    position: "MID",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/0fb2a3f6e52ebc878f2092bbbbb72428b4a5798645aaf7e2f86480a8f74ffe31393297ec04b390e14dd34ce249541199863c44db852d9914b710c330b3a91940ef216a57224e37185696a1e318557465f91a6d515553ba062f6636a61654cfce051136ecf2d96fc59a8974a12318d4bf",
  },
  {
    id: 3,
    nickname: "Peanut",
    name: "한왕호",
    position: "JGL",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 1,
      lck: 4,
    },
    imgUrl:
      "https://w.namu.la/s/41b808504ba6c140cd1f071e503ab32bf76fdef4b2b8e38697b8991dfa03419e6eeae5c7eebe8a1f1b99726f4077e02d96fd0cb9b0e5e4662b3e086d8c77d14b0ac64bf53f057de8032484c624072cbc60eed8caf59ebd74794d3b025dcbe00215a0cc6c0d400671834c63bac4648c28",
  },
  {
    id: 4,
    nickname: "Doran",
    name: "최현준",
    position: "TOP",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/9af1ca91d54d973d6199b26bc79849bae28931f2ab917493a22e9b9a989fb7d8610c159a0d128cde7e7397d92208e35328670fa471d794e2b3d4ce4f952e94df7bb059414df87659596258eff8299852152ec265271a7e16e229c248079585170a7fa99077b7de8754b093f0251c1496",
  },
  {
    id: 5,
    nickname: "Ruler",
    name: "박재혁",
    position: "BOT",
    birthday: "1996-05-07",
    career: {
      worlds: 1,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/ade95e2ff47e08ea4c279ffd6b1e09260d805d849144e1d07aba18ea26d0fa3865c755d1f584847e6c5afc1a6b33249079a0e7cd833ce4a8f854e118173995c641d26dc1961e1e7d9f7ea4174c469bb57e1a1524c3ab58ea8b8862bf8c9fa12b4ece051a092790fb094879b89048f847",
  },
  {
    id: 6,
    nickname: "Fate",
    name: "유수혁",
    position: "MID",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 0,
    },
    imgUrl:
      "https://w.namu.la/s/8912b46633db2b62f669dd5337b9147ea5f5328ab22fbca7aa6baaf95f2a0db7c5d2eb4016d3412edaf29ce9008a4f74ede5061be163c44c91610a3c3f11121587ca6e7defb920bcad4746b2f9531a7460f5b57ebaec6327042ff56cb5de0e45584c005d04e048b25ffeaaa563171ef5",
  },
  {
    id: 7,
    nickname: "Kiin",
    name: "김기인",
    position: "TOP",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 0,
    },
    imgUrl:
      "https://w.namu.la/s/aad374522e8ba9800e3b1bba20dec1a3fa2b94a3f6d36e9d4e05954c68251d5623d98feb896c018df585f1c7f8419012c9862833f8e7c7c03ab6325643cd011a6df39dfe898be443274a1c7dfacaf80dbc370053480eaf53e38de9a8c93bd94380ba937cd2ef4f8643c8549f1a4d9dda",
  },
  {
    id: 8,
    nickname: "Pyosik",
    name: "홍창현",
    position: "JGL",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 0,
    },
    imgUrl:
      "https://w.namu.la/s/5a90acc5504cea7508649417233a90ee5d4bb556a5c72bea892866f6b737de588172060b1562e80c0dbfe9bd6456c58b057184a331408ae46a795337fe4bc82b5eb4c3c78aa5efb5c186aede94741b32c61ae2eba2c76fd5fe128efd6b5d132050d04361bd7567cd6e9a923e5a1441ac",
  },
  {
    id: 9,
    nickname: "Breyl",
    name: "조건희",
    position: "SPT",
    birthday: "1996-05-07",
    career: {
      worlds: 1,
      msi: 0,
      lck: 3,
    },
    imgUrl:
      "https://w.namu.la/s/61ea434b3d3ec4747833bd3db395197a615acba246c305c127aa8d90dde9b2cbe10343dc33b4c0bbc14a6558d97fa9f0984eaa67dab72c0dff76385011c7e0cbce3ac941d57683c84976054c0b830bee474d706de12077e388dc455784dad1e2623a9a0c42ceb50e3fd5359f91d19573",
  },
  {
    id: 10,
    nickname: "Zeka",
    name: "김건우",
    position: "MID",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 0,
    },
    imgUrl:
      "https://w.namu.la/s/a9214682a3dea0910b5cdc3e68038ee5f835c31fd8351606c4d8bca819fb7d13aa262410061e4264ed41710792c66e8287a18ee48d20aeda4a159819cdf4b8d6d782a6cdf188ef1ea85090ee1e3c8f36bb0fca36b95304dd0a7fe970cff35925a5c5f0a13a0c9f40689bed8b4405d5f5",
  },
  {
    id: 11,
    nickname: "Nuguri",
    name: "장하권",
    position: "TOP",
    birthday: "1996-05-07",
    career: {
      worlds: 1,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/11fa9f09bef7bd4b6d34acd92960d4c83225b9da835520b1bd729e2715ffd26aaa1958db7d5109715e7d70aa028670161f71381fb5bac67a9f811dfcef9578d0a9408f2a35e1dfb85b0821644dc1ff6c79710f76ad18df61092991689734faedd590815f80f67dbe00e1338f19e24752",
  },
  {
    id: 12,
    nickname: "Canyon",
    name: "김건부",
    position: "JGL",
    birthday: "1996-05-07",
    career: {
      worlds: 1,
      msi: 0,
      lck: 3,
    },
    imgUrl:
      "https://w.namu.la/s/8a4d90432e3765819444516930f08a6723173161198ec013b74332ea53dfd88b0d1181131196dc3294ff1db5b1c8c273b5c9d69698e62238ed1066d4218c647a9a21c20a61f408174adae0cf1201e7bc256245e53d28b00bd83931d0d2eddfbd60f97bddde839f5b8327841ca8221c01",
  },
  {
    id: 13,
    nickname: "Deokdam",
    name: "서대길",
    position: "BOT",
    birthday: "1996-05-07",
    career: {
      worlds: 0,
      msi: 0,
      lck: 0,
    },
    imgUrl:
      "https://w.namu.la/s/2ebc9404cd5d358d587b0651aee469bbf0108cab0381c44147d1b1da8a7ca09aff529ed3dc5ad31a77fb754d3ca4c3f46bf23ca267ca9f806c1ac3d06c8498d04ce7b1ccfe39f62c8a671d10abc5d4df8d6e0bb359799284286d28a1a369abd460c421709169a1daaac31a4c53b282a6",
  },
  {
    id: 14,
    nickname: "Keria",
    name: "류민석",
    position: "SPT",
    birthday: "2002-10-14",
    career: {
      worlds: 0,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/b00ad5479f05e75ef173851b0ed107f6df5f013bb4ffe1c7a7a34a15502f569b50b1430275c990ca7b831a0fd6bcbf3bc0afec11400df01e2f4694989308cc19f6ab6296899ca9adde5c1cec24564ffdff6f93352b7e5ee3c59318f0d37065476f5b0b7b443fb3344c26751d83867337",
  },
  {
    id: 15,
    nickname: "Gumayusi",
    name: "이민형",
    position: "BOT",
    birthday: "2002-02-06",
    career: {
      worlds: 0,
      msi: 0,
      lck: 2,
    },
    imgUrl:
      "https://w.namu.la/s/16b60c7f0e640ccab01f252794f42c8679f149b18d7caeffca6432f85d8af938294f236fbfe79a736f188233fe663d676ad401adb06d265377320d37953949393de4e6f98a552f0ceb04f398862aa3c86a7323736f1f7630a060eb37508e6b65c57b6727bea5ffd84c60a023033d0a75",
  },
  {
    id: 16,
    nickname: "Oner",
    name: "문현준",
    position: "JGL",
    birthday: "2002-12-24",
    career: {
      worlds: 0,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/aceea0d75006b5d42a15e55e2475cf88678f1bf17bdd6e489ffec5b2e76650ed950cf656c4ae74a5e0b15efd9c240dc5aaf5e996eb067d168f58dd05a77093e0fccbb45501ca46f5e0a2603294b950318a30783723a3370134060a7418b455255be8340a7cf8216488ae3d4417150658",
  },
  {
    id: 17,
    nickname: "Zeus",
    name: "최우제",
    position: "TOP",
    birthday: "2004-01-31",
    career: {
      worlds: 0,
      msi: 0,
      lck: 1,
    },
    imgUrl:
      "https://w.namu.la/s/0f20029f374d68b0709fa9d8601b8d92fb24724b452f89e00780c1fe49323f762ab71aebbad759e86ac30d5a9538a12a7dd2be497e50575192005174edbc98ead8bf53079e9e667527cd65f17dab2e0e018388768589f61096b66177ceaa6d8e863d5673623d7d75c3d5b5d6c6a90e0a",
  },
];

export default DUMMY_DATA;
