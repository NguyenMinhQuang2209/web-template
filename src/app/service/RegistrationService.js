import AxiosCustom from "../component/axios_custom/AxiosCustom";

const RegistrationService = {
  create: async (registration) => {
    return await AxiosCustom.post(
      "/api/admin/registration-plans/create",
      registration
    );
  },
  getAll: async () => {
    return await AxiosCustom.get("/api/common/plans");
  },
  update: async (registration) => {
    return await AxiosCustom.put(
      "/api/admin/registration-plans/update",
      registration
    );
  },
  changeStatus: async (planID, status) => {
    return await AxiosCustom.put(
      "/api/admin/registration-plans/change_plan_status",
      {
        planID,
        status,
      }
    );
  },
};

export default RegistrationService;
