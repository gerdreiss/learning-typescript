/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { RMap } from "./RMap";

const user = new User();
const company = new Company();
const rmap = new RMap("map");

rmap.addMarker(user);
rmap.addMarker(company);
