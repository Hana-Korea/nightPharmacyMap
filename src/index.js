//지도생성
const container = document.getElementById("map");
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};
const map = new kakao.maps.Map(container, options);

const places = new kakao.maps.services.Places(map);
const callback = function (result, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    console.log({ result, pagination });
    // alert("검색된 약국의 갯수는 " + result.length + "개 입니다.");
  }
};

places.categorySearch("PM9", callback, {
  location: new kakao.maps.LatLng(33.450701, 126.570667),
});
const position = new kakao.maps.LatLng(33.450701, 126.570667);

const content = `<div class="overlay-container">hi</div>`;

const customOverlay = new kakao.maps.CustomOverlay({
  position,
  content,
  xAnchor: 0.3,
  yAnchor: 0.91,
});

customOverlay.setMap(map);
