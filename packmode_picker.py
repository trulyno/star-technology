import shutil
from pathlib import Path

# ANSI color codes
GREEN = "\033[0;36m"
RESET = "\033[0m"

def print_banner():
    print(f"{GREEN}")
    print("=" * 55)
    print()
    print("           Star Technology Packmode Picker")
    print()
    print("=" * 55)
    print(f"{RESET}")

def display_menu():
    print("[D] Default - the standard experience")
    print("[H] Hard - for the masochistic")
    print("[A] Abydos - dehydration enjoyer")
    print()

def get_user_choice():
    choices = {
        "D": ("Default", "default"),
        "H": ("Hard", "hard"),
        "A": ("Abydos", "abydos")
    }

    while True:
        choice = input("Enter Packmode (D, H, or A): ").strip().upper()
        if choice in choices:
            return choices[choice]
        else:
            print("Invalid choice. Please select D, H, or A.")

def apply_packmode(selected_name, selected_folder):
    script_dir = Path(__file__).resolve().parent
    packmode_dir = script_dir / "packmode"
    selected_path = packmode_dir / selected_folder
    target_path = script_dir

    chapters_path = target_path / "config" / "ftbquests" / "quests" / "chapters"
    if chapters_path.exists() and chapters_path.is_dir():
        shutil.rmtree(chapters_path)

    for item in selected_path.iterdir():
        destination = target_path / item.name
        if item.is_dir():
            shutil.copytree(item, destination, dirs_exist_ok=True)
        else:
            shutil.copy2(item, destination)

    print()
    print(f"Applying Packmode [{selected_name}]...")
    print()
    print("=" * 90)
    print("=" * 90)
    print()
    print("Packmode switch complete!")
    print()

def main():
    print_banner()
    display_menu()
    selected_name, selected_folder = get_user_choice()
    apply_packmode(selected_name, selected_folder)
    input("Press Enter to exit...")

if __name__ == "__main__":
    main()
