import { Swiper, SwiperSlide } from 'swiper/react';

export interface BirthdayUser {
  id: string;
  name: string;
  age: number;
  role: string;
  image: string;
  isToday?: boolean;
}

type BirthdayWidgetProps = {
  users: BirthdayUser[];
  title?: string;
};

const BirthdayWidget: React.FC<BirthdayWidgetProps> = ({
  users,
  title = 'Birthdays Today',
}) => {
  return (
    <div className="analytics-box bg-[#135cca] p-4 rounded-md">
      <h3 className="text-base font-medium font-libre mb-3 text-white">
        {title}
      </h3>

      <Swiper spaceBetween={16} slidesPerView={'auto'} className="!px-1">
        {users.map((user) => (
          <SwiperSlide
            key={user.id}
            style={{ width: 'auto' }}
            className="bg-white rounded-lg p-3 w-36"
          >
            <div className="w-full flex flex-col items-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover mb-2"
              />
              <div className="text-center mb-2">
                <h3 className="text-[#17243e] font-libre text-sm mb-1">
                  {user.name}
                </h3>
                <p className="font-mulish text-xs">{user.role}</p>
              </div>
              <div className="text-center">
                <p className="text-[#17243e] font-libre text-xs mb-1">
                  {user.isToday ? 'TODAY BIRTHDAY' : 'Upcoming'}
                </p>
                <p className="font-mulish text-xs text-[#0eb01d]">
                  {user.age} years
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BirthdayWidget;
