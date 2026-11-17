// -- BEGIN NG --
import {SettingsEntry} from "@/features/ide-settings/context/types.ts";

export function NGFilterIDESettingsTabs(settingsTabs: SettingsEntry[]): SettingsEntry[] {
    return settingsTabs.filter((entry: SettingsEntry) => entry.key !== "account_settings");
}
// -- END NG --
