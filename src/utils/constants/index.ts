const APP_CONSTANTS = {
  apiPrefix: '',
  params: 'params',
  query: 'query',
  body: 'body',
  file: 'file',
  service: 'fithou-bot',
};

const DEFAULT_PAGING = {
  limit: 100,
  skip: 0,
};

const CRAWL_FITHOU_URL = 'http://fithou.edu.vn/Category.aspx';

const enum CRAWL_FITHOU_TYPE {
  new = -1,
  noChange = 0,
  oneRecord = 1,
  manyRecords = 2,
}

const SCHOOL_SCHEDULE_URL = 'http://ctms.fithou.net.vn/Lichhoc.aspx?sid=';

const COLUMN_NAME_SCHEDULE = ['STT', 'Giờ', 'Phòng', 'Môn học', 'Giảng viên', 'Lớp', 'Trạng thái'];

const EXPIRED_CTMS =
  'Từ 2/2022, hãy thực hiện theo thông báo này để nhận được sự Hỗ trợ duy trì tài khoản truy cập CTMS từ khoa CNTT.';
const todayformatted = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  const date: string = dd + '/' + mm + '/' + yyyy;
  return date;
};

const NOTI_IMAGE = {
  on: 'https://cdn-icons-png.flaticon.com/128/1827/1827312.png',
  off: 'https://cdn-icons-png.flaticon.com/128/1827/1827310.png',
};

export {
  APP_CONSTANTS,
  DEFAULT_PAGING,
  CRAWL_FITHOU_URL,
  CRAWL_FITHOU_TYPE,
  SCHOOL_SCHEDULE_URL,
  COLUMN_NAME_SCHEDULE,
  todayformatted,
  EXPIRED_CTMS,
  NOTI_IMAGE,
};
