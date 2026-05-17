const list = [
  {
    name: "Phan Như Quyền",
    pos: "Bếp trưởng",
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAn4bISdADZrGtGnkVLKhiE4ydMi229MHsP5JZaqSlWd8g5CdGIz5fd0YY8JEu2TKXjltiQbPjkBj92sO3lU0X2wAyCtwL0mGnOfomh4jYIt4rBfVMCkH7r29N_yD0wkvTkXXfdtUydQV0-qxPO4qw5UknDE11ZjjEwyESli23_SrrrFXW0lX1fJRsq37xUnEMMF6Dcfsd1oD9ND6RIFJJSuZssCe0QOV6P8DTN0i5qaL5CVsIWLo598ZwLt_Myzcop1-EiOegFG2g")',
  },
  {
    name: "Phan Như Quyền",
    pos: "Chuyên gia bánh ngọt",
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXd1HkbpZRhK0_7n3Vx98oFQhjvQWgThqcMjOCyMNjuRStxO6HL3o9EiP9K-bPUVB4jLfi7dVYDOaqWTYkmjFNCSHA5u6mA-A4d_jKsj8-NHgA-RqUMtZan9V0nC8Yn5TOAjgkdfTRXd0DTGKHiV7IIYqzGDOZ0i6uK9tjl6ufLyl2y7CWZGmbaazFtWD6SH3s0S7sNQM0nlO82Ku_96pwGlWEplU-n9PFa4Wybmfb4OIGLAy8tzU-PTjQ_pfxoeVqnIO7PkW7zfQ")',
  },
  {
    name: "Phan Như Quyền",
    pos: "Quản lý cửa hàng",
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNbboV_V-KvIb5shxFfgzBg-_V0mdXk4yKgC8Ul8MWIgtWki3MaGxDWaISVK8DXJpvH4WmxdwRAJDK62l7U1b-QaefvLioCy5KmzaFCf2E0jOq442UIkvxAk6qBhqzcy6ulJZ-Fx6-46Up3Calwfk1YZesNVu7a3lBHCp4xDnm7MVEDZk7-BlXIcA3U2_5FbaOO7LxaaaA7ItFtMWgTaQWIX0CxOqYKOzAtG9p00eTDQ-LVWgq0017q_s1phayXqya-1TB0GLCTtc")',
  },
  {
    name: "Phan Như Quyền",
    pos: "Chuyên gia pha chế",
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB49gvNOvZUKmNCTy1GwlfZ4P2KX-sT6XmR9AsxFkIOcF2SGqTjfiStyXLdEp7KGM9DlIb0cxjKM6dGeXp0n_tUfiMGafBHvolmD7EN9XqJncYwMvRE1E8kt-oloMcuSyPYRjCxc1rluhwCV31vhGrboW8IQxPQ7qZrZ8m4YmlpxHuqcc7FkKz6vnpM7cLF-JHw1fIewNKKxsr_Pz9bE_oLsAx6zGwoiNCIdMFRfyGNXtPNS37nZ1FK7Wi62o58ahSZEJZHz848G7A")',
  },
];

const Section4 = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-[#181114] text-center mb-8">
        Gặp gỡ đội ngũ của chúng tôi
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {list.map((item) => (
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-square mb-4">
              <div
                className="w-full h-full rounded-full bg-cover bg-center"
                data-alt="Portrait of the head baker, a smiling woman in a chef's hat"
                style={{
                  backgroundImage: item.backgroundImage,
                }}
              ></div>
            </div>
            <h5 className="font-bold text-[#181114]">{item.name}</h5>
            <p className="text-sm text-highlight">{item.pos}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
