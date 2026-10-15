import { computed, ref } from "vue";

const RELEASE_DATE = new Date("2026-11-17T00:00:00-03:00");
const COOKIE_NAME = "datasp_preview";

const previewEnabled = ref(false);
const released = ref(false);

function hasPreviewCookie(): boolean {
  return document.cookie
    .split(";")
    .some(cookie => cookie.trim() === `${COOKIE_NAME}=1`);
}

function writePreviewCookie(enabled: boolean): void {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  const expiration = enabled
    ? `Expires=${RELEASE_DATE.toUTCString()}`
    : "Max-Age=0";

  document.cookie =
    `${COOKIE_NAME}=${enabled ? "1" : ""};` +
    `${expiration}; Path=/; SameSite=Lax${secure}`;
}

function syncPreview(): void {
  released.value = Date.now() >= RELEASE_DATE.getTime();

  if (released.value) {
    writePreviewCookie(false);
    previewEnabled.value = false;
    return;
  }

  previewEnabled.value = hasPreviewCookie();
}

function applyPreviewParameter(value: string | null | (string | null)[]): void {
  syncPreview();

  if (released.value) return;

  if (value === "true" || value === "false") {
    const enabled = value === "true";

    writePreviewCookie(enabled);
    previewEnabled.value = enabled;
  }
}

function disablePreview(): void {
  writePreviewCookie(false);
  previewEnabled.value = false;
}

const showUpdateContent = computed(
  () => released.value || previewEnabled.value,
);

export function usePreview() {
  return {
    previewEnabled: computed(() => previewEnabled.value),
    released: computed(() => released.value),
    showUpdateContent,
    syncPreview,
    applyPreviewParameter,
    disablePreview,
  }
}
