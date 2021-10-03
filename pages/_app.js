import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/globals.sass';
import 'nprogress/nprogress.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const TopProgressBar = dynamic(
  () => {
    return import('components/TopProgressBar');
  },
  { ssr: false },
);
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>
          Camera Anh Quang - Lắp đặt camera, đầu kĩ thuật số tại Bắc Ninh
        </title>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <meta
          name="description"
          content="Camera Anh Quang - Bắc Ninh chuyên Phân phối Sỉ, Lẻ các dòng Camera an ninh wifi không dây & camera có dây cao cấp được ưa chuộng nhất hiện nay & Dịch vụ Lắp đặt Camera giám sát UY TÍN nhất hiện nay. Với phương châm “Mang đến khách hàng giá trị tốt nhất, nâng cao cuộc sống tiện nghi”, Hải Nam không ngừng tìm kiếm và cung cấp SẢN PHẨM CHÍNH HÃNG – CHẤT LƯỢNG CAO – GIÁ CẢ PHẢI CHĂNG Cùng với những CHÍNH SÁCH CHĂM SÓC khách hàng THẬT CHU ĐÁO"
        ></meta>
        <meta
          name="keywords"
          content="camera bac ninh, camera chat luong cao, camera uy tin, camera anh quang, cameara wifi, camera hanh trinh, camera gia re, camera hd-tv, camera chong trom, camera ip, dau ghi hinh dvr, nvr, camera ipc, ip, thiet bi quay phim, quay phat, mua camera tai bac ninh"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="twitter:title"
          content="Lắp đặt camera, máy tính, báo động, thiết bị nhà thông minh tại Bắc Ninh"
        />
        <meta
          name="twitter:description"
          content="Cung cấp lắp đặt Camera, máy tính, báo động, thiết bị nhà thông minh, thiết bị văn phòng tại Bắc Ninh. Liên hệ 0986795960 để có giá tốt nhất."
        ></meta>
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}
