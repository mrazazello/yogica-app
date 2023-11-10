import { getTariffsData } from "./model/selectors/getTariffsData/getTariffsData";
import { getTariffsError } from "./model/selectors/getTariffsError/getTariffsError";
import { getTariffsLoading } from "./model/selectors/getTariffsLoading/getTariffsLoading";
import { fetchTariffs } from "./model/servises/fetchTariffs/fetchTariffs";

export { fetchTariffs, getTariffsData, getTariffsError, getTariffsLoading };
