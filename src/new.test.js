const users = [
  {
    name: "prince",
    active: true,
  },
  {
    name: "cal",
    active: false,
  },
];
function processUsers(users, callback) {
  for (const user of users) {
    if (user.active) {
      callback(user);
    }
  }
}
test("calls callbacks for only active users", () => {
  const mockCallback = jest.fn();
  processUsers(users, mockCallback);
  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith({ name: "prince", active: true });
});

async function getUserCity(userId, fetchUserData) {
  const userData = await fetchUserData(userId);

  if (!userData || !userData.address || !userData.address.city)
    return "unknown";

  return userData.address.city;
}

describe("getUserCity", () => {
  let mockFetchUserData;
  beforeEach(() => {
    mockFetchUserData = jest.fn();
  });

  test("returns the city when full user address data is provided", async () => {
    const fakeUser = {
      id: 43,
      name: "prince",
      address: { city: "vienna" },
    };
    mockFetchUserData.mockResolvedValue(fakeUser);

    const city = await getUserCity(42, mockFetchUserData);

    expect(city).toBe("vienna");
    expect(mockFetchUserData).toHaveBeenCalledTimes(1);
    expect(mockFetchUserData).toHaveBeenCalledWith(42);
  });

  test("returns unknown when users address is null", async () => {
    mockFetchUserData.mockResolvedValue(null);

    const city = await getUserCity(72, mockFetchUserData);
    expect(city).toBe("unknown");
    expect(mockFetchUserData).toHaveBeenCalledWith(72);
  });
});
